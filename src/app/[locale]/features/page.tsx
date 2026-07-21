import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { localeAlternates } from '@/i18n/alternates';
import FeaturesClient from './features-client';

type Props = { params: { locale: string } };

export function generateMetadata({ params: { locale } }: Props): Metadata {
  return { alternates: localeAlternates(locale, '/features') };
}

export default function FeaturesPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  return <FeaturesClient />;
}
