import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** Editorial order used where dates tie (all launch posts share a date). */
export const ORDER = [
  'first-timers-guide-to-portugal',
  'lisbon-or-porto',
  'best-time-to-visit-portugal',
  'ten-day-portugal-itinerary',
  'three-days-in-the-douro-valley',
  'algarve-in-winter',
  'azores-or-madeira',
  'what-to-eat-in-portugal',
  'walking-the-rota-vicentina',
  'getting-around-portugal',
];
export const START_HERE = ['first-timers-guide-to-portugal', 'best-time-to-visit-portugal', 'getting-around-portugal', 'ten-day-portugal-itinerary'];
export const FEATURED = 'first-timers-guide-to-portugal';

export async function allPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');
  const rank = (id: string) => { const i = ORDER.indexOf(id); return i === -1 ? 999 : i; };
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime() || rank(a.id) - rank(b.id));
}

export const postPath = (p: Post) => `/stories/${p.id}/`;

export function related(post: Post, posts: Post[], n = 3): Post[] {
  const score = (o: Post) =>
    o.data.categories.filter((c) => post.data.categories.includes(c)).length * 2 +
    o.data.regions.filter((r) => post.data.regions.includes(r)).length;
  return posts
    .filter((o) => o.id !== post.id)
    .map((o) => ({ o, s: score(o) }))
    .sort((a, b) => b.s - a.s)
    .slice(0, n)
    .map((x) => x.o);
}
