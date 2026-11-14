import services from '../data/services.json';
import faqs from '../data/faqs.json';
import { site } from '../data/site';

export function GET() {
  const markdown = [
    '# Business Email Support & Migration | IT Support Bee',
    `Canonical: ${site.website}/`,
    site.bio,
    '## Services',
    ...services.map(s => `- [${s.title}](${site.website}${s.href}): ${s.desc}`),
    '## Frequently asked questions',
    ...faqs.map(f => `### ${f.question}\n\n${f.answer}`),
    '## Contact and more information',
    `- [Contact IT Support Bee](${site.website}/contact)\n- Email: ${site.email}\n- [About ${site.name}](${site.website}/about)\n- [Articles and case studies](${site.website}/blog)\n- [Detailed site guide](${site.website}/llms.txt)`,
  ].join('\n\n') + '\n';
  return new Response(markdown, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
}
