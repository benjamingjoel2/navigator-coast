import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { allPosts, postPath } from '../data/posts';
import { SITE } from '../data/site';

export async function GET(context: APIContext) {
  const posts = await allPosts();
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: postPath(p),
      categories: p.data.categories,
      author: `${SITE.email} (${SITE.editor})`,
    })),
    customData: '<language>en-gb</language>',
  });
}
