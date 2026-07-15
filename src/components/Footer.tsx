/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Leaf, Mail, Linkedin } from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Integrations', href: '/features#integrations' },
    { name: 'Open App', href: 'https://app.climatrix.co' },
  ],
  solutions: [
    { name: 'GHG Emissions', href: '/features#ghg' },
    { name: 'CBAM Compliance', href: '/features#cbam' },
    { name: 'Free CBAM Check', href: 'https://app.climatrix.co/cbam-check' },
    { name: 'Scenario Planning', href: '/features#scenarios' },
  ],
  company: [
    { name: 'How It Works', href: '/#about' },
    { name: 'Request a Demo', href: '/demo' },
    { name: 'Contact', href: 'mailto:avi@climatrix.co' },
  ],
  legal: [
    { name: 'Privacy Policy', href: 'https://app.climatrix.co/privacy' },
    { name: 'Terms of Service', href: 'https://app.climatrix.co/terms' },
    { name: 'Security', href: 'https://app.climatrix.co/security' },
  ],
};

export default function Footer() {
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
              The complete carbon accounting platform for modern businesses.
              Track, report, and reduce your environmental footprint.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/climatrix"
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
            <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-accent-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-accent-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-accent-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-accent-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-secondary-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-300">
              &copy; {new Date().getFullYear()} CLIMATRIX. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-secondary-300">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-500"></span>
                GDPR Compliant
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-400"></span>
                Encrypted &amp; Isolated
              </span>
            </div>
            <p className="text-sm text-secondary-300">
              Questions? <a href="mailto:avi@climatrix.co" className="text-accent-300 hover:underline">avi@climatrix.co</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
