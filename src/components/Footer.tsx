/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Leaf, Mail, Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'Features', href: '/features' },
    { name: 'Demo', href: '/demo' },
    { name: 'Integrations', href: '/features#integrations' },
    { name: 'Open App', href: 'http://localhost:3003' },
  ],
  solutions: [
    { name: 'GHG Emissions', href: '/features#ghg' },
    { name: 'CBAM Compliance', href: '/features#cbam' },
    { name: 'LCA & EPD', href: '/features#lca' },
    { name: 'Scenario Planning', href: '/features#scenarios' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/demo' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Security', href: '/security' },
    { name: 'GDPR', href: '/gdpr' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
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
                  CLIME<span className="text-primary-400">TRIX</span>
                </span>
              </Link>
            </div>
            <p className="text-sm text-gray-400 mb-6 max-w-xs">
              The complete carbon accounting platform for modern businesses.
              Track, report, and reduce your environmental footprint.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/climatrix"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/climatrix"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:luvchik@climatrix.com"
                className="text-gray-400 hover:text-primary-400 transition-colors"
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
                  <Link href={link.href} className="text-sm hover:text-primary-400 transition-colors">
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
                  <Link href={link.href} className="text-sm hover:text-primary-400 transition-colors">
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
                  <Link href={link.href} className="text-sm hover:text-primary-400 transition-colors">
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
                  <Link href={link.href} className="text-sm hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} CLIMATRIX. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-500"></span>
                GDPR Compliant
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                SOC 2 Ready
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Questions? <a href="mailto:luvchik@climatrix.com" className="text-primary-400 hover:underline">luvchik@climatrix.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
