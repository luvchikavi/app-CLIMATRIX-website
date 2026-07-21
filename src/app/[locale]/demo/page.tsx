import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { localeAlternates } from '@/i18n/alternates';
import DemoClient from './demo-client';

type Props = { params: { locale: string } };

export function generateMetadata({ params: { locale } }: Props): Metadata {
  return { alternates: localeAlternates(locale, '/demo') };
}

export default function DemoPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  return <DemoClient />;
}
