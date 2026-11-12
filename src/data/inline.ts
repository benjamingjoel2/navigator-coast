import type { ImageMetadata } from 'astro';

/** One in-post photo. Each post's photos live in src/data/inline/<post-slug>.json. */
export interface InlinePhoto {
  id: string;          // also the file name: src/assets/inline/<id>.jpg
  alt: string;
  author: string;
  source: string;      // photo page (Unsplash, Wikimedia Commons or a press library)
  licence: string;     // e.g. "Unsplash License", "CC BY-SA 4.0", "Editorial use (press kit)"
  licenceUrl: string;
  place: string;       // short description for the credits page
}

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/inline/*.jpg', { eager: true });
const data = import.meta.glob<{ default: InlinePhoto[] }>('./inline/*.json', { eager: true });

export const INLINE: (InlinePhoto & { post: string })[] = Object.entries(data).flatMap(([p, m]) => {
  const post = p.split('/').pop()!.replace('.json', '');
  return m.default.map((x) => ({ ...x, post }));
});

export const inlineById = (id: string) => {
  const meta = INLINE.find((x) => x.id === id);
  if (!meta) throw new Error(`No credit entry for inline photo "${id}"`);
  const f = files[`../assets/inline/${id}.jpg`];
  if (!f) throw new Error(`Missing file src/assets/inline/${id}.jpg`);
  return { ...meta, file: f.default };
};
