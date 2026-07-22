import type { MetadataRoute } from 'next';

/**
 * Explicit welcome mat for AI crawlers (GEO/AEO): training collectors,
 * per-query fetch bots and AI-search indexers are all allowed on the
 * marketing site — being readable to them is how Climatrix shows up in
 * assistant answers. The app itself lives on app.climatrix.co behind auth.
 */
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Bingbot',
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: 'https://climatrix.co/sitemap.xml',
  };
}
