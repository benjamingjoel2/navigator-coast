export const SITE = {
  name: 'Navigator Coast',
  url: 'https://navigatorcoast.tourground.com',
  tagline: 'Story-led, practical travel writing for planning a trip to Portugal.',
  description:
    'Navigator Coast is a travel blog for people planning a trip to Portugal: where to go, when to go, what to eat and how to book safely. Published by Tourground.',
  email: 'navigatorcoast@tourground.com',
  publisher: { name: 'Tourground', url: 'https://tourground.com' },
  directoryUrl: 'https://tourground.com/',
  launched: '2026-11-11',
  editor: 'Navigator Coast editors',
};

export type CategoryKey = 'destinations' | 'itineraries' | 'food-wine' | 'walking-coast' | 'where-to-stay' | 'travel-tips';
export type RegionKey = 'lisbon' | 'porto-douro' | 'alentejo' | 'algarve' | 'centro' | 'madeira' | 'azores';

export const CATEGORIES: { key: CategoryKey; name: string; path: string; blurb: string }[] = [
  { key: 'destinations', name: 'Destinations', path: '/destinations/', blurb: 'Seven very different Portugals, from Lisbon and the Douro to the Atlantic islands.' },
  { key: 'itineraries', name: 'Itineraries', path: '/itineraries/', blurb: 'Day-by-day routes, with honest notes on pace and how the legs connect.' },
  { key: 'food-wine', name: 'Food & Wine', path: '/food-and-wine/', blurb: 'What to eat and drink, region by region, and where it comes from.' },
  { key: 'walking-coast', name: 'Walking & Coast', path: '/walking-and-coast/', blurb: 'Clifftop trails, levadas and the long Atlantic shoreline on foot.' },
  { key: 'where-to-stay', name: 'Where to Stay', path: '/where-to-stay/', blurb: 'Which town or neighbourhood to base yourself in, and why.' },
  { key: 'travel-tips', name: 'Travel Tips', path: '/travel-tips/', blurb: 'Seasons, transport, entry rules and booking safely.' },
];

export const REGIONS: { key: RegionKey; name: string; path: string; blurb: string }[] = [
  { key: 'lisbon', name: 'Lisbon', path: '/destinations/lisbon/', blurb: 'The capital on the Tagus, with Sintra and the Cascais coast close by.' },
  { key: 'porto-douro', name: 'Porto & the Douro', path: '/destinations/porto-and-the-douro/', blurb: 'Granite city on the river, and the terraced wine valley upstream.' },
  { key: 'alentejo', name: 'Alentejo', path: '/destinations/alentejo/', blurb: 'Cork oaks, whitewashed towns, Évora and a wild Atlantic coast.' },
  { key: 'algarve', name: 'Algarve', path: '/destinations/algarve/', blurb: 'Sea cliffs and coves in the west, lagoon and island beaches in the east.' },
  { key: 'centro', name: 'Centro', path: '/destinations/centro/', blurb: 'Coimbra, the Serra da Estrela and the Bairrada and Dão wine country.' },
  { key: 'madeira', name: 'Madeira', path: '/destinations/madeira/', blurb: 'A steep green island of levada walks and Atlantic views.' },
  { key: 'azores', name: 'The Azores', path: '/destinations/the-azores/', blurb: 'Nine volcanic islands in the mid-Atlantic: crater lakes, whales and weather.' },
];

export const categoryByKey = (k: string) => CATEGORIES.find((c) => c.key === k)!;
export const regionByKey = (k: string) => REGIONS.find((r) => r.key === k)!;

/**
 * "Plan this trip" box. Porto Season is the Portugal operator listed in the
 * Tourground directory (https://tourground.com). Paths are its destination pages.
 */
export const OPERATOR = {
  name: 'Porto Season',
  url: 'https://portoseason.tourground.com',
  summary: 'Porto Season plans stays in Portugal of one to twelve months: the town, the home, the paperwork and the people, handled by one local specialist.',
};

export const PLAN_LINKS: Record<string, { label: string; path: string }[]> = {
  'first-timers-guide-to-portugal': [{ label: 'Lisbon', path: '/destinations/lisbon' }, { label: 'Porto', path: '/destinations/porto' }],
  'lisbon-or-porto': [{ label: 'Lisbon', path: '/destinations/lisbon' }, { label: 'Porto', path: '/destinations/porto' }],
  'best-time-to-visit-portugal': [{ label: 'Plan a season in Portugal', path: '/plan-my-season' }],
  'ten-day-portugal-itinerary': [{ label: 'Porto', path: '/destinations/porto' }, { label: 'Coimbra', path: '/destinations/coimbra' }, { label: 'Lagos', path: '/destinations/lagos-western-algarve' }],
  'three-days-in-the-douro-valley': [{ label: 'The Douro', path: '/destinations/douro-valley' }],
  'algarve-in-winter': [{ label: 'Lagos and the western Algarve', path: '/destinations/lagos-western-algarve' }, { label: 'Tavira and the eastern Algarve', path: '/destinations/tavira-eastern-algarve' }],
  'azores-or-madeira': [{ label: 'Madeira', path: '/destinations/madeira' }, { label: 'The Azores', path: '/destinations/azores' }],
  'what-to-eat-in-portugal': [{ label: 'Évora and the Alentejo', path: '/destinations/evora-alentejo' }, { label: 'Porto', path: '/destinations/porto' }],
  'walking-the-rota-vicentina': [{ label: 'Comporta', path: '/destinations/comporta' }, { label: 'Lagos and the western Algarve', path: '/destinations/lagos-western-algarve' }],
  'getting-around-portugal': [{ label: 'Plan a season in Portugal', path: '/plan-my-season' }],
};

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);

export const readingTime = (body = '') => {
  const words = body.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 225));
};
