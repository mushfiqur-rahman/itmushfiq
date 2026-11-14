import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, statSync } from 'node:fs';

// Use content history, never the build time (which would falsely refresh every URL).
const dates = new Map();
function changed(path) {
  if (!existsSync(path)) throw new Error(`Missing sitemap source: ${path}`);
  if (!dates.has(path)) {
    let date;
    try {
      date = execFileSync('git', ['log', '-1', '--format=%cI', '--', path], { encoding: 'utf8' }).trim();
      const dirty = execFileSync('git', ['status', '--porcelain', '--', path], { encoding: 'utf8' }).trim();
      if (dirty) date = undefined;
    } catch { /* Source archives have no Git history; use source modification time. */ }
    dates.set(path, date ? new Date(date) : statSync(path).mtime);
  }
  return dates.get(path);
}

export function sitemapLastmod(url) {
  const route = decodeURIComponent(new URL(url).pathname).replace(/^\/|\/$/g, '');
  const sources = ['src/layouts/BaseLayout.astro', 'src/components/Schema.astro', 'src/data/site.ts'];
  if (route.startsWith('blog/')) {
    const slug = route.slice(5);
    const article = readdirSync('src/data/blog').find(file => file.replace(/\.md$/, '').toLowerCase() === slug.toLowerCase());
    if (!article) throw new Error(`No source for sitemap URL: ${url}`);
    sources.push(`src/data/blog/${article}`, 'src/layouts/BlogLayout.astro');
  } else {
    sources.push(`src/pages/${route === '' ? 'index' : route === 'blog' ? 'blog/index' : route}.astro`);
    if (route === '' || route === 'blog') {
      sources.push(...readdirSync('src/data/blog').map(file => `src/data/blog/${file}`));
    }
    if (route === '') sources.push('src/data/services.json', 'src/data/faqs.json', 'src/components/Hero.astro', 'src/components/ProcessTimeline.astro', 'src/components/Testimonials.astro');
  }
  return new Date(Math.max(...sources.map(path => changed(path).getTime()))).toISOString();
}
