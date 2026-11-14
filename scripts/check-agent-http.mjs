// Usage: node scripts/check-agent-http.mjs /path/to/php
// Tests real PHP handlers. Apache rewrite/CORS rules still need a hosting smoke test.
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
const base = 'http://127.0.0.1:18769';
const server = spawn(process.argv[2] || 'php', ['-S', '127.0.0.1:18769', '-t', 'dist'], { stdio: 'ignore' });
let startupError;
server.on('error', error => { startupError = error; });
const rpc = (method, params = {}, extra = {}) => fetch(`${base}/mcp.php`, {
  method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json, text/event-stream', ...extra },
  body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }),
});
try {
  let ready = false;
  for (let i = 0; i < 50; i++) {
    if (startupError) throw startupError;
    try { await fetch(`${base}/robots.txt`); ready = true; break; } catch { await delay(100); }
  }
  assert(ready, 'PHP server did not start');
  for (const [accept, contentType] of [
    ['text/markdown', 'text/markdown'], ['*/*', 'text/html'],
    ['text/markdown;q=0, text/html', 'text/html'],
    ['text/markdown;q=0.4, text/html;q=0.9', 'text/html'],
    ['text/markdown;q=0.9, text/html;q=0.4', 'text/markdown'],
    ['text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8', 'text/html'],
  ]) {
    const response = await fetch(`${base}/agent-home.php`, { headers: { Accept: accept } });
    assert.equal(response.status, 200);
    assert(response.headers.get('content-type').startsWith(contentType));
    assert.match(response.headers.get('vary'), /Accept/);
    assert.match(response.headers.get('link'), /llms\.txt/);
    assert.match(await response.text(), contentType === 'text/markdown' ? /^# Business/ : /<!doctype html>/i);
  }
  assert.equal((await fetch(`${base}/agent-home.php`, { headers: { Accept: 'application/json' } })).status, 406);
  const head = await fetch(`${base}/agent-home.php`, { method: 'HEAD', headers: { Accept: 'text/markdown' } });
  assert.equal(await head.text(), '');
  assert.match(head.headers.get('content-type'), /text\/markdown/);
  const init = await (await rpc('initialize', { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 'test', version: '1' } })).json();
  assert.equal(init.result.protocolVersion, '2025-06-18');
  assert.equal(init.result.serverInfo.name, 'itsupportbee-public-guide');
  assert.equal((await (await rpc('tools/list')).json()).result.tools[0].name, 'get_service_guide');
  assert.match((await (await rpc('tools/call', { name: 'get_service_guide', arguments: {} })).json()).result.content[0].text, /^# Business/);
  const resources = (await (await rpc('resources/list')).json()).result.resources;
  for (const resource of resources) {
    const result = await (await rpc('resources/read', { uri: resource.uri })).json();
    assert.equal(result.result.contents[0].uri, resource.uri);
    assert(result.result.contents[0].text.length > 100);
  }
  for (const [method, params, code] of [
    ['unknown', {}, -32601], ['resources/read', { uri: '../mcp.php' }, -32602],
    ['tools/call', { name: 'get_service_guide', arguments: { extra: true } }, -32602],
  ]) assert.equal((await (await rpc(method, params)).json()).error.code, code);
  assert.equal((await rpc('ping', {}, { Origin: 'https://evil.example' })).status, 403);
  assert.equal((await rpc('ping', {}, { 'MCP-Protocol-Version': 'unknown' })).status, 400);
  assert.equal((await fetch(`${base}/mcp.php`)).status, 405);
  const notification = await fetch(`${base}/mcp.php`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{"jsonrpc":"2.0","method":"notifications/initialized"}' });
  assert.equal(notification.status, 202);
  assert.equal(await notification.text(), '');
  const malformed = await fetch(`${base}/mcp.php`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{' });
  assert.equal((await malformed.json()).error.code, -32700);
  console.log('PHP HTTP checks passed: Accept negotiation, headers, MCP lifecycle, tools, resources, and errors.');
} finally { server.kill(); }
