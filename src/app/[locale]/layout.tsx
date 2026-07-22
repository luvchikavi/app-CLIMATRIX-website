import type { Metadata } from 'next';
import { Assistant, Nunito_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import '../globals.css';

// Nunito Sans is the Canopy brand font (matches the platform app).
const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

// Nunito Sans has no Hebrew glyphs; Assistant fills them via the font stack,
// so Latin text keeps the brand font on both locales.
const assistant = Assistant({
  subsets: ['hebrew'],
  variable: '--font-hebrew',
});
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: ['carbon accounting', 'GHG emissions', 'CBAM compliance', 'sustainability', 'ESG', 'climate software'],
    authors: [{ name: 'CLIMATRIX' }],
    openGraph: {
      title: t('title'),
      description: t('ogDescription'),
      url: 'https://climatrix.co',
      siteName: 'CLIMATRIX',
      locale: locale === 'he' ? 'he_IL' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('ogDescription'),
    },
  };
}

// Entity + product facts for search and AI assistants (schema.org JSON-LD).
// Kept factual and stable — the sameAs list disambiguates "Climatrix" from
// unrelated same-name entities (e.g. climatrix.earth is a different company).
const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://climatrix.co/#organization',
      name: 'CLIMATRIX',
      url: 'https://climatrix.co',
      logo: 'https://climatrix.co/icon.png',
      description:
        'Climatrix is a carbon accounting and sustainability platform for SMEs and manufacturers: Scope 1-3 GHG inventory with AI data import, CBAM compliance, product carbon footprints (PCF), LCA and EPD generation, and a verifier portal.',
      email: 'support@climatrix.co',
      sameAs: ['https://www.linkedin.com/company/climatrix-co'],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://climatrix.co/#software',
      name: 'CLIMATRIX',
      url: 'https://app.climatrix.co',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      publisher: { '@id': 'https://climatrix.co/#organization' },
      description:
        'Carbon accounting software: corporate carbon footprint (GHG Protocol / ISO 14064-1), AI Smart Import for invoices and spreadsheets, decarbonization planning with SBTi targets, EU CBAM module, PCF per ISO 14067 with PACT v3 exchange, LCA on the EF 3.1 method, and EN 15804+A2 EPD generation.',
      offers: {
        '@type': 'Offer',
        price: '99',
        priceCurrency: 'USD',
        description: 'Starter plan from $99/month; 14-day free trial, no credit card required.',
      },
    },
  ],
};

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      dir={locale === 'he' ? 'rtl' : 'ltr'}
      className={`scroll-smooth ${nunitoSans.variable} ${assistant.variable} font-sans`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
