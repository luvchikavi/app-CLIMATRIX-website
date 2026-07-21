import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'he'],
  defaultLocale: 'en',
  // English stays at the root (no /en prefix); Hebrew lives under /he.
  localePrefix: 'as-needed',
});

export type Locale = (typeof routing.locales)[number];
