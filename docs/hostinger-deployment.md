# Deploying to Hostinger

Run `npm run build`, then upload the contents of `dist/` to the domain's document
root (usually `public_html/`). Include hidden files: `dist/.htaccess` must be
uploaded alongside `dist/404.html` and `dist/index.html`.

Astro copies `public/.htaccess` into the build. Its `ErrorDocument 404 /404.html`
directive tells Hostinger's Apache/LiteSpeed server to serve the custom Astro
error page for missing URLs, including nested paths, with HTTP status 404.

If the server already has an `.htaccess` file with domain-specific settings,
merge this directive into it and replace any existing `ErrorDocument 404` rule.
Keep the error target as a local path; an absolute URL would cause a redirect.

After uploading, visit a nonexistent path such as `/missing-page-check` and
`/blog/missing-page-check`. Both should display the site's custom 404 page.
Use the browser's Network panel to confirm the document response is **404**.
Also check the home page, an existing article, and their assets still load.

The Astro development and preview servers do not exercise `.htaccess` rules;
verify this behavior on Hostinger after deployment. If an old error page is
cached, clear the hosting/CDN cache and retry.

## Agent endpoints

The build remains static Astro. PHP 8+ and Apache/LiteSpeed rewrite support on
Hostinger handle the two dynamic routes. Upload **all** build files, including
`agent-home.php`, `mcp.php`, `index.md`, `.htaccess`, and the hidden
`.well-known/mcp/server-card.json` directory. PHP must execute on the host;
do not deploy these handlers to a static-only host. Merge existing domain
redirects before the new rewrite rules. Keep the exact homepage and MCP rules
before any catch-all rewrites. `mod_headers` supplies server-card CORS headers.

- `/` and `/index.html` negotiate HTML or Markdown using Accept quality values.
  Both responses send `Vary: Accept`, `Cache-Control: no-cache`, and resource
  `Link` headers. Configure any CDN to respect these headers or bypass caching
  for the homepage; purge old cached responses after deployment.
- `/index.md` is the explicit Markdown alternate, generated from the same
  services and FAQs as the homepage.
- `/mcp` is a stateless, read-only Streamable HTTP endpoint using protocol
  `2025-06-18`. It supports initialization, ping, tool listing/calling, and
  resource listing/reading. GET/SSE and DELETE/session termination return 405.
  `get_service_guide` reads public information only; it cannot submit enquiries.
  Browser calls accept only the site's two HTTPS origins. Non-browser clients
  may omit Origin. Apply hosting-level request limits if needed.
- The server card follows the **draft** SEP-1649 shape at the requested path;
  this proposal is not a finalized interoperability guarantee.
- WebMCP registers the same read-only guide lookup when the browser supports
  `navigator.modelContext.registerTool`. Other browsers remain unaffected.
- Sitemap lastmod comes from Git/source modification dates, including shared
  layout data. Preserve Git history in build checkouts; source archives fall
  back to file modification times. Do not replace these with every build's date.
- Content Signals declare `search=yes, ai-train=no`; this is a usage preference,
  not a technical access control.

Run `node scripts/check-agent-readiness.mjs` after the build. With PHP installed,
run `node scripts/check-agent-http.mjs` (or supply a PHP executable path as the
first argument) to test the actual handlers on a temporary local server. This
checks content negotiation, MCP lifecycle/tools/resources, and error responses,
but does not emulate Apache. On Hostinger, verify:

```sh
curl -I https://itsupportbee.com/
curl -i -H 'Accept: text/markdown' https://itsupportbee.com/
curl -I -H 'Accept: text/markdown;q=0, text/html' https://itsupportbee.com/
curl -i https://itsupportbee.com/.well-known/mcp/server-card.json
curl -i https://itsupportbee.com/llms.txt
curl -i https://itsupportbee.com/sitemap-0.xml
curl -i https://itsupportbee.com/mcp -H 'Content-Type: application/json' -H 'Accept: application/json, text/event-stream' --data '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke-test","version":"1.0"}}}'
curl -i https://itsupportbee.com/mcp -H 'Content-Type: application/json' -H 'Accept: application/json, text/event-stream' -H 'MCP-Protocol-Version: 2025-06-18' --data '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"get_service_guide","arguments":{}}}'
```

Confirm HTTP 200, the appropriate content types, homepage Link/Vary headers,
server-card CORS headers, and JSON-RPC results containing the service guide.
Also confirm normal homepage rendering and the existing 404 behavior. Astro's
development and preview servers do not execute PHP or process `.htaccess`.
