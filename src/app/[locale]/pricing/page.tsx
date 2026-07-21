import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { localeAlternates } from '@/i18n/alternates';
import PricingClient from './pricing-client';

type Props = { params: { locale: string } };

export function generateMetadata({ params: { locale } }: Props): Metadata {
  return { alternates: localeAlternates(locale, '/pricing') };
}

export default function PricingPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  return <PricingClient />;
}
