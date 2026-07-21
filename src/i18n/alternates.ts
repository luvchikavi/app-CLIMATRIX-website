const BASE_URL = 'https://climatrix.co';

/**
 * hreflang alternates for a page. English is served at the root
 * (no /en prefix), Hebrew under /he.
 */
export function localeAlternates(locale: string, path: string) {
  const suffix = path === '/' ? '' : path;
  const en = `${BASE_URL}${suffix || '/'}`;
  const he = `${BASE_URL}/he${suffix}`;
  return {
    canonical: locale === 'he' ? he : en,
    languages: {
      en,
      he,
      'x-default': en,
    },
  };
}
