import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { localeAlternates } from '@/i18n/alternates';
import HomeClient from './home-client';

type Props = { params: { locale: string } };

export function generateMetadata({ params: { locale } }: Props): Metadata {
  return { alternates: localeAlternates(locale, '/') };
}

export default function HomePage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  return <HomeClient />;
}
