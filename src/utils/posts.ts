import { getCollection } from 'astro:content';

// Keep listing classification in one place. Set `caseStudy: true` in a post's
// frontmatter to show it only in Case Studies; omitted/false means Blog.
// Detail URLs stay under /blog/ so existing links and search results still work.
export async function getPosts(kind: 'blog' | 'case-study') {
  return (await getCollection('blog', ({ data }) =>
    data.caseStudy === (kind === 'case-study')
  )).sort((a, b) => Date.parse(b.data.pubDate) - Date.parse(a.data.pubDate));
}

// Explicit UTC prevents publication dates shifting across build environments.
export const formatPostDate = (date: string) => new Date(date).toLocaleDateString('en-US', {
  month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC',
});
