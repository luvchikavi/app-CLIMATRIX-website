import type { MetadataRoute } from 'next';

const BASE = 'https://climatrix.co';

/** EN lives at the root (localePrefix as-needed); Hebrew under /he. */
const ROUTES = ['', '/features', '/pricing', '/demo'];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap((route) => [
    {
      url: `${BASE}${route || '/'}`,
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${BASE}${route || '/'}`,
          he: `${BASE}/he${route}`,
        },
      },
    },
    {
      url: `${BASE}/he${route}`,
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 0.9 : 0.7,
    },
  ]);
}
