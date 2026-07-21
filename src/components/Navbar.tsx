'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
/* eslint-disable @next/next/no-img-element */
import { Menu, X, Leaf, ExternalLink } from 'lucide-react';
import { Link, usePathname } from '@/i18n/navigation';

const navigation = [
  { key: 'howItWorks', href: '/#about' },
  { key: 'capabilities', href: '/#features' },
  { key: 'pricing', href: '/#pricing' },
  { key: 'requestDemo', href: '/demo' },
] as const;

// Demo app URL
const APP_URL = 'https://app.climatrix.co';

function LocaleSwitch({ className = '' }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();

  const item = (target: 'en' | 'he', label: string) => (
    <Link
      href={pathname}
      locale={target}
      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${
        locale === target
          ? 'bg-white text-primary-700 shadow-sm'
          : 'text-gray-500 hover:text-primary-600'
      }`}
    >
      {label}
    </Link>
  );

  return (
    <span
      className={`inline-flex items-center rounded-full bg-gray-100 p-0.5 ${className}`}
      dir="ltr"
    >
      {item('en', 'EN')}
      {item('he', 'עב')}
    </span>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('nav');

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <nav className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
        <div className="flex lg:flex-1 items-center gap-4">
          {/* CLIMATRIX Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center shadow-lg shadow-primary-500/25">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900 leading-none">CLIMATRIX</span>
              <p className="text-[9px] text-gray-500 uppercase tracking-[0.2em]">{t('tagline')}</p>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-4">
          <LocaleSwitch />
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">{t('openMenu')}</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              {t(item.key)}
            </Link>
          ))}
        </div>

        {/* Desktop CTA buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-3">
          <a
            href={`${APP_URL}/login`}
            className="whitespace-nowrap text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors px-2 py-1.5"
          >
            {t('login')}
          </a>
          <a
            href={`${APP_URL}/register`}
            className="whitespace-nowrap rounded-lg gradient-bg px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
          >
            {t('startFreeTrial')}
          </a>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-primary-600 px-3.5 py-1.5 text-sm font-semibold text-primary-600 hover:bg-primary-50 transition-colors"
          >
            {t('openApp')}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <LocaleSwitch className="ms-1" />
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/20" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 end-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold text-gray-900">
                    CLIMATRIX
                  </span>
                </Link>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">{t('closeMenu')}</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t(item.key)}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  <a
                    href={`${APP_URL}/login`}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {t('login')}
                  </a>
                  <a
                    href={`${APP_URL}/register`}
                    className="block rounded-lg gradient-bg px-3 py-2.5 text-base font-semibold text-white text-center"
                  >
                    {t('startFreeTrial')}
                  </a>
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg border border-primary-600 px-3 py-2.5 text-base font-semibold text-primary-600"
                  >
                    {t('openApp')}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
