<?php
// Stateless, read-only MCP Streamable HTTP (2025-06-18), JSON response mode.
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function reply($id, $result = null, ?array $error = null, int $status = 200): void {
    http_response_code($status);
    echo json_encode(['jsonrpc' => '2.0', 'id' => $id] + ($error ? ['error' => $error] : ['result' => $result]), JSON_UNESCAPED_SLASHES);
    exit;
}
function fail($id, int $code, string $message, int $status = 200): void {
    reply($id, null, ['code' => $code, 'message' => $message], $status);
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? null;
if ($origin !== null && !in_array($origin, ['https://itsupportbee.com', 'https://www.itsupportbee.com'], true)) {
    fail(null, -32600, 'Origin not allowed', 403);
}
if ($origin !== null) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
header('Allow: POST, OPTIONS');
if ($method === 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, MCP-Protocol-Version');
    http_response_code(204);
    exit;
}
if ($method !== 'POST') fail(null, -32600, 'Use POST; SSE streams and sessions are not supported', 405);
if (strtolower(trim(explode(';', $_SERVER['CONTENT_TYPE'] ?? '')[0])) !== 'application/json') {
    fail(null, -32600, 'Content-Type must be application/json', 415);
}
$version = $_SERVER['HTTP_MCP_PROTOCOL_VERSION'] ?? '2025-06-18';
if ($version !== '2025-06-18') fail(null, -32600, 'Unsupported protocol version', 400);
$raw = file_get_contents('php://input', false, null, 0, 65537);
if (strlen($raw) > 65536) fail(null, -32600, 'Request too large', 413);
try { $request = json_decode($raw, false, 32, JSON_THROW_ON_ERROR); }
catch (JsonException $e) { fail(null, -32700, 'Parse error', 400); }
if (!is_object($request) || ($request->jsonrpc ?? null) !== '2.0' || !is_string($request->method ?? null)) {
    fail(null, -32600, 'Invalid request', 400);
}
$hasId = property_exists($request, 'id');
$id = $request->id ?? null;
if ($hasId && !is_string($id) && !is_int($id)) fail(null, -32600, 'Invalid request id', 400);
if (isset($request->params) && !is_object($request->params)) fail($id, -32602, 'Invalid params', 400);
if (!$hasId) { http_response_code(202); exit; }
$params = $request->params ?? new stdClass();
$card = json_decode(file_get_contents(__DIR__ . '/.well-known/mcp/server-card.json'));
$files = [
    'https://itsupportbee.com/index.md' => ['index.md', 'text/markdown'],
    'https://itsupportbee.com/llms.txt' => ['llms.txt', 'text/plain'],
    'mcp://server-card.json' => ['.well-known/mcp/server-card.json', 'application/json'],
];
switch ($request->method) {
    case 'initialize':
        if (!is_string($params->protocolVersion ?? null) || !is_object($params->capabilities ?? null) || !is_object($params->clientInfo ?? null)) fail($id, -32602, 'Invalid initialization params');
        reply($id, ['protocolVersion' => $card->protocolVersion, 'capabilities' => $card->capabilities, 'serverInfo' => $card->serverInfo]);
    case 'ping': reply($id, new stdClass());
    case 'tools/list': reply($id, ['tools' => $card->tools]);
    case 'resources/list': reply($id, ['resources' => $card->resources]);
    case 'resources/templates/list': reply($id, ['resourceTemplates' => []]);
    case 'tools/call':
        if (($params->name ?? null) !== 'get_service_guide') fail($id, -32602, 'Unknown tool');
        $args = $params->arguments ?? new stdClass();
        if (!is_object($args) || count(get_object_vars($args)) !== 0) fail($id, -32602, 'This tool takes no arguments');
        $text = @file_get_contents(__DIR__ . '/index.md');
        if ($text === false) reply($id, ['isError' => true, 'content' => [['type' => 'text', 'text' => 'Service guide temporarily unavailable.']]]);
        reply($id, ['content' => [['type' => 'text', 'text' => $text]]]);
    case 'resources/read':
        $uri = $params->uri ?? null;
        if (!is_string($uri) || !isset($files[$uri])) fail($id, -32602, 'Unknown resource');
        [$path, $mime] = $files[$uri];
        $text = @file_get_contents(__DIR__ . '/' . $path);
        if ($text === false) fail($id, -32603, 'Resource temporarily unavailable');
        reply($id, ['contents' => [['uri' => $uri, 'mimeType' => $mime, 'text' => $text]]]);
    default: fail($id, -32601, 'Method not found');
}
