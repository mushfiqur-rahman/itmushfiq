import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import vm from 'node:vm';

const read = path => readFileSync(`dist/${path}`, 'utf8');
const home = read('index.html');
assert.match(home, /<link[^>]+rel="canonical"[^>]+href="https:\/\/itsupportbee.com\/"/);
assert.match(home, /<meta[^>]+name="description"/);
assert.match(home, /<title>Email Migration &amp; Deliverability Consultant/);
const schemas = [...home.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(m => {
  const value = JSON.parse(m[1]);
  return value['@graph'] ?? [value];
});
for (const type of ['Organization', 'Person', 'WebSite', 'WebPage', 'Service', 'FAQPage']) {
  assert(schemas.some(s => [].concat(s['@type']).includes(type)), `Missing ${type}`);
}
assert(schemas.find(s => [].concat(s['@type']).includes('Organization')).sameAs.length > 0);
assert.equal(schemas.filter(s => s['@type'] === 'Service').length, 7);
assert.match(read('robots.txt'), /Content-Signal: search=yes, ai-train=yes/);
assert.match(read('llms.txt'), /https:\/\/itsupportbee.com\/contact/);
const markdown = read('index.md');
assert.match(markdown, /^# Business Email Support/);
assert.match(markdown, /## Frequently asked questions/);
assert(!readdirSync('dist').some(name => /^sitemap-.+\.xml$/.test(name)), 'Only /sitemap.xml should be published');
for (const name of ['sitemap.xml']) {
  const xml = read(name);
  assert.match(xml, /<urlset /, 'sitemap.xml must list URLs directly');
  const urls = [...xml.matchAll(/<url>(.*?)<\/url>/gs)];
  assert(urls.length > 0);
  for (const [, item] of urls) {
    const lastmod = item.match(/<lastmod>(.*?)<\/lastmod>/)?.[1];
    // lastmod is omitted when no trustworthy date exists; when present it must be valid.
    if (lastmod) {
      assert(Number.isFinite(Date.parse(lastmod)), `Invalid lastmod: ${item}`);
      assert(Date.parse(lastmod) <= Date.now(), `Future lastmod: ${lastmod}`);
    }
    assert(!item.includes('index.md'), 'Markdown alternate should not be an indexable page');
  }
}
const card = JSON.parse(read('.well-known/mcp/server-card.json'));
assert.equal(card.transport.endpoint, 'https://itsupportbee.com/mcp');
assert.equal(card.capabilities.tools.listChanged, false);
assert(existsSync('dist/mcp.php'));
assert(existsSync('dist/agent-home.php'));
assert.match(read('.htaccess'), /RewriteRule.*agent-home\.php/);
const code = read('webmcp.js');
vm.runInNewContext(code, { navigator: {} }); // Unsupported browsers must remain functional.
let tool;
vm.runInNewContext(code, {
  navigator: { modelContext: { registerTool(value) { tool = value; } } },
  fetch: async path => { assert.equal(path, '/index.md'); return { ok: true, text: async () => markdown }; },
});
assert.equal(tool.name, card.tools[0].name);
assert.equal(JSON.stringify(tool.inputSchema), JSON.stringify(card.tools[0].inputSchema));
assert.equal((await tool.execute()).content[0].text, markdown);
console.log('Agent readiness build checks passed: metadata, schema, sitemap dates, discovery files, and WebMCP execution.');
