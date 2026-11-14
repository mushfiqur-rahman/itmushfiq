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
