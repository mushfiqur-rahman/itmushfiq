import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync } from 'node:fs';

// Real content dates only: blog posts use their frontmatter dates; other pages
// use Git history. Never the build time or file mtime, which on a deploy
// without Git history would falsely mark every URL as just changed.
let gitAvailable;
function hasGit() {
  if (gitAvailable === undefined) {
    try {
      execFileSync('git', ['rev-parse', '--is-inside-work-tree'], { stdio: 'ignore' });
      gitAvailable = true;
    } catch { gitAvailable = false; }
  }
  return gitAvailable;
}

const dates = new Map();
function gitDate(path) {
  if (!existsSync(path)) throw new Error(`Missing sitemap source: ${path}`);
  if (!dates.has(path)) {
    let date = null;
    try {
      const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', path], { encoding: 'utf8' }).trim();
      if (out) date = new Date(out);
    } catch { /* no history for this path */ }
    dates.set(path, date);
  }
  return dates.get(path);
}

function frontmatterDate(file) {
  const fm = readFileSync(file, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
  const pick = key => fm.match(new RegExp(`^${key}:\\s*"?([^"\\r\\n]+)"?`, 'm'))?.[1];
  const values = [pick('updatedDate'), pick('pubDate')].map(v => v && new Date(v)).filter(d => d && Number.isFinite(d.getTime()));
  return values.length ? new Date(Math.max(...values.map(d => d.getTime()))) : null;
}

const blogFiles = () => readdirSync('src/data/blog').filter(f => f.endsWith('.md'));

/** Returns an ISO date string, or undefined to omit <lastmod>. */
export function sitemapLastmod(url) {
  const route = decodeURIComponent(new URL(url).pathname).replace(/^\/|\/$/g, '');
  if (route.startsWith('blog/')) {
    const slug = route.slice(5);
    const article = blogFiles().find(file => file.replace(/\.md$/, '').toLowerCase() === slug.toLowerCase());
    if (!article) throw new Error(`No source for sitemap URL: ${url}`);
    return frontmatterDate(`src/data/blog/${article}`)?.toISOString();
  }
  if (route === 'blog') {
    const newest = Math.max(...blogFiles().map(f => frontmatterDate(`src/data/blog/${f}`)?.getTime() ?? 0));
    return newest ? new Date(newest).toISOString() : undefined;
  }
  if (!hasGit()) return undefined;
  const sources = [`src/pages/${route === '' ? 'index' : route}.astro`];
  if (route === '') sources.push('src/data/services.json', 'src/data/faqs.json', 'src/components/Hero.astro');
  const found = sources.map(gitDate).filter(Boolean);
  return found.length ? new Date(Math.max(...found.map(d => d.getTime()))).toISOString() : undefined;
}
