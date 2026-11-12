import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    categories: z.array(z.enum(['destinations', 'itineraries', 'food-wine', 'walking-coast', 'where-to-stay', 'travel-tips'])).min(1),
    regions: z.array(z.enum(['lisbon', 'porto-douro', 'alentejo', 'algarve', 'centro', 'madeira', 'azores'])).default([]),
    heroAlt: z.string(),
    featured: z.boolean().default(false),
    startHere: z.boolean().default(false),
    // Paid placements must set this; they are labelled "Advertisement feature".
    advertisement: z.boolean().default(false),
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { posts };
