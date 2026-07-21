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
