'use client';

import { useState } from 'react';
import Link from 'next/link';
/* eslint-disable @next/next/no-img-element */
import { Menu, X, Leaf, ExternalLink } from 'lucide-react';

const navigation = [
  { name: 'How it works', href: '/#about' },
  { name: 'Capabilities', href: '/#features' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Request Demo', href: '/demo' },
];

// Demo app URL
const APP_URL = 'https://climetrix.io';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <nav className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
        <div className="flex lg:flex-1 items-center gap-4">
          {/* CLIMATRIX Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:inline">
              CLIME<span className="text-primary-600">TRIX</span>
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <a
            href={`${APP_URL}/login`}
            className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors px-4 py-2"
          >
            Log in
          </a>
          <a
            href={`${APP_URL}/register`}
            className="rounded-lg gradient-bg px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
          >
            Start Free Trial
          </a>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-primary-600 px-4 py-2 text-sm font-semibold text-primary-600 hover:bg-primary-50 transition-colors"
          >
            Open App
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/20" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold text-gray-900">
                    CLIME<span className="text-primary-600">TRIX</span>
                  </span>
                </Link>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  <a
                    href={`${APP_URL}/login`}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                  <a
                    href={`${APP_URL}/register`}
                    className="block rounded-lg gradient-bg px-3 py-2.5 text-base font-semibold text-white text-center"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg border border-primary-600 px-3 py-2.5 text-base font-semibold text-primary-600"
                  >
                    Open App
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
