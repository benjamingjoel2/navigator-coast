import { allPosts, postPath } from '../data/posts';
import { SITE, CATEGORIES, REGIONS } from '../data/site';

export async function GET() {
  const posts = await allPosts();
  const u = (p: string) => new URL(p, SITE.url).href;
  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    '',
    'Every story links its official sources and shows when it was published and last updated. Paid placements, if any, are labelled "Advertisement feature".',
    '',
    '## Stories',
    '',
    ...posts.map((p) => `- [${p.data.title}](${u(postPath(p))}): ${p.data.description}`),
    '',
    '## Categories',
    '',
    ...CATEGORIES.map((c) => `- [${c.name}](${u(c.path)}): ${c.blurb}`),
    '',
    '## Destinations',
    '',
    ...REGIONS.map((r) => `- [${r.name}](${u(r.path)}): ${r.blurb}`),
    '',
    '## About',
    '',
    `- [About](${u('/about/')})`,
    `- [Authors](${u('/authors/')})`,
    `- [Disclosure](${u('/disclosure/')})`,
    `- [Photo credits](${u('/photo-credits/')})`,
    `- [RSS feed](${u('/rss.xml')})`,
    '',
    `Contact: ${SITE.email}`,
    `Published by Tourground: ${SITE.publisher.url}`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
