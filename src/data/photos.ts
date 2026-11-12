import type { ImageMetadata } from 'astro';

export interface Photo {
  key: string;
  title: string;
  author: string;
  licence: string;
  licenceUrl: string;
  source: string;
  place: string;
}

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.jpg', { eager: true });
export const photoFile = (key: string): ImageMetadata => {
  const f = files[`../assets/photos/${key}.jpg`];
  if (!f) throw new Error(`Missing photo ${key}`);
  return f.default;
};

import credits from './photo-credits.json';
// New posts keep their hero credit in src/data/heroes/<slug>.json (one object, key = slug).
const heroFiles = import.meta.glob<{ default: Photo }>('./heroes/*.json', { eager: true });
export const PHOTOS: Photo[] = [...(credits as Photo[]), ...Object.values(heroFiles).map((m) => m.default)];
export const photoByKey = (k: string) => {
  const p = PHOTOS.find((x) => x.key === k);
  if (!p) throw new Error(`Missing photo credit ${k}`);
  return p;
};
