<?php
// Hostinger PHP handles Accept negotiation; Astro continues to generate the HTML.
declare(strict_types=1);

function quality(string $accept, string $type): float {
    $quality = 0.0;
    $specificity = -1;
    foreach (explode(',', strtolower($accept)) as $entry) {
        $parts = array_map('trim', explode(';', $entry));
        $media = array_shift($parts);
        $score = $media === $type ? 2 : ($media === 'text/*' ? 1 : ($media === '*/*' ? 0 : -1));
        if ($score < 0 || $score < $specificity) continue;
        $q = 1.0;
        foreach ($parts as $param) {
            if (preg_match('/^q\s*=\s*(.*)$/', $param, $match)) {
                $q = is_numeric($match[1]) ? max(0.0, min(1.0, (float)$match[1])) : 0.0;
            }
        }
        $quality = $score === $specificity ? max($quality, $q) : $q;
        $specificity = $score;
    }
    return $quality;
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if (!in_array($method, ['GET', 'HEAD'], true)) {
    header('Allow: GET, HEAD');
    http_response_code(405);
    exit;
}
$accept = $_SERVER['HTTP_ACCEPT'] ?? '*/*';
$md = quality($accept, 'text/markdown');
$html = quality($accept, 'text/html');
// Require an explicit Markdown preference; ordinary browsers and */* get HTML.
$markdown = preg_match('~(?:^|,)\s*text/markdown\s*(?:;|,|$)~i', $accept) && $md > 0 && $md >= $html;
header('Vary: Accept');
header('Cache-Control: no-cache');
header('Link: <https://itsupportbee.com/llms.txt>; rel="describedby"; type="text/plain", <https://itsupportbee.com/index.md>; rel="alternate"; type="text/markdown", <https://itsupportbee.com/.well-known/mcp/server-card.json>; rel="describedby"; type="application/json"');
if (!$markdown && $html <= 0) {
    http_response_code(406);
    exit;
}
$file = __DIR__ . ($markdown ? '/index.md' : '/index.html');
if (!is_file($file)) {
    http_response_code(503);
    exit;
}
header('Content-Type: ' . ($markdown ? 'text/markdown' : 'text/html') . '; charset=utf-8');
if ($method !== 'HEAD') readfile($file);
