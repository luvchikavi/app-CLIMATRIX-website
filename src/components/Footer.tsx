/* eslint-disable @next/next/no-img-element */
import { useTranslations } from 'next-intl';
import { Leaf, Mail, Linkedin } from 'lucide-react';
import { Link } from '@/i18n/navigation';

const footerLinks = {
  product: [
    { key: 'features', href: '/features' },
    { key: 'pricing', href: '/pricing' },
    { key: 'integrations', href: '/features#integrations' },
    { key: 'openApp', href: 'https://app.climatrix.co' },
  ],
  solutions: [
    { key: 'ccf', href: '/features#ghg' },
    { key: 'pcf', href: '/features#pcf' },
    { key: 'lca', href: '/features#lca' },
    { key: 'epd', href: '/features#epd' },
    { key: 'verifier', href: '/features#verifier' },
    { key: 'cbam', href: '/features#cbam' },
    { key: 'cbamCheck', href: 'https://app.climatrix.co/cbam-check' },
    { key: 'scenarios', href: '/features#scenarios' },
  ],
  company: [
    { key: 'howItWorks', href: '/#about' },
    { key: 'requestDemo', href: '/demo' },
    { key: 'contact', href: 'mailto:avi@climatrix.co' },
  ],
  legal: [
    { key: 'privacy', href: 'https://app.climatrix.co/privacy' },
    { key: 'terms', href: 'https://app.climatrix.co/terms' },
    { key: 'security', href: 'https://app.climatrix.co/security' },
  ],
} as const;

type FooterLink = { key: string; href: string };

function FooterLinkItem({ link, label }: { link: FooterLink; label: string }) {
  const isExternal = link.href.startsWith('http') || link.href.startsWith('mailto:');
  const className = 'text-sm hover:text-accent-300 transition-colors';
  return (
    <li>
      {isExternal ? (
        <a href={link.href} className={className}>
          {label}
        </a>
      ) : (
        <Link href={link.href} className={className}>
          {label}
        </Link>
      )}
    </li>
  );
}

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-secondary-900 text-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">
                  CLIMATRIX
                </span>
              </Link>
            </div>
            <p className="text-sm text-secondary-200 mb-6 max-w-xs">
              {t('blurb')}
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/climatrix-co"
                className="text-secondary-200 hover:text-accent-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:avi@climatrix.co"
                className="text-secondary-200 hover:text-accent-300 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{t('productHeading')}</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <FooterLinkItem key={link.key} link={link} label={t(`links.${link.key}`)} />
              ))}
            </ul>
          </div>

          {/* Solutions links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{t('solutionsHeading')}</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <FooterLinkItem key={link.key} link={link} label={t(`links.${link.key}`)} />
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{t('companyHeading')}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <FooterLinkItem key={link.key} link={link} label={t(`links.${link.key}`)} />
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{t('legalHeading')}</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <FooterLinkItem key={link.key} link={link} label={t(`links.${link.key}`)} />
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-secondary-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-300">
              {t('rights', { year: String(new Date().getFullYear()) })}
            </p>
            <div className="flex items-center gap-6 text-sm text-secondary-300">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-500"></span>
                {t('gdpr')}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-400"></span>
                {t('encrypted')}
              </span>
            </div>
            <p className="text-sm text-secondary-300">
              {t('questions')} <a href="mailto:avi@climatrix.co" className="text-accent-300 hover:underline">avi@climatrix.co</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
