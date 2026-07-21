'use client';

/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import {
  BarChart3,
  FileCheck,
  Leaf,
  LineChart,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Database,
  FileSpreadsheet,
  Globe2,
  Zap,
  TrendingDown,
  Factory,
  Truck,
  Building,
  Lightbulb,
  ExternalLink,
  Package,
  ShieldCheck,
  FileBadge,
} from 'lucide-react';

// The live platform app
const APP_URL = 'https://app.climatrix.co';

// The footprint chain — from company footprint to published product declaration.
// Copy lives in the message catalogs (features.chain.tools.*).
const toolChain = [
  { id: 'ghg', abbr: 'CCF', statusKey: 'live', icon: BarChart3 },
  { id: 'pcf', abbr: 'PCF', statusKey: 'beta', icon: Package },
  { id: 'lca', abbr: 'LCA', statusKey: 'beta', icon: Leaf },
  { id: 'epd', abbr: 'EPD', statusKey: 'beta', icon: FileBadge },
] as const;

// Copy lives in the message catalogs (features.main.*).
const mainFeatures = [
  {
    id: 'ghg',
    icon: BarChart3,
    chip: 'bg-primary-100 text-primary-600',
    hasBadge: false,
    image: '/images/dashboard_emissions.png',
  },
  {
    id: 'pcf',
    icon: Package,
    chip: 'bg-accent-100 text-accent-600',
    hasBadge: true,
    image: '/images/dashboard_pcf.png',
  },
  {
    id: 'lca',
    icon: Leaf,
    chip: 'bg-accent-100 text-accent-600',
    hasBadge: true,
    image: null,
  },
  {
    id: 'epd',
    icon: FileBadge,
    chip: 'bg-primary-100 text-primary-600',
    hasBadge: true,
    image: null,
  },
  {
    id: 'verifier',
    icon: ShieldCheck,
    chip: 'bg-secondary-100 text-secondary-600',
    hasBadge: false,
    image: null,
  },
  {
    id: 'cbam',
    icon: FileCheck,
    chip: 'bg-secondary-100 text-secondary-600',
    hasBadge: true,
    image: '/images/dashboard_cbam.png',
  },
  {
    id: 'scenarios',
    icon: LineChart,
    chip: 'bg-primary-100 text-primary-600',
    hasBadge: true,
    image: '/images/dashboard_scenarios.png',
  },
] as const;

const scope3Icons = [
  FileSpreadsheet,
  Building,
  Zap,
  Truck,
  Factory,
  Globe2,
  Truck,
  Building,
  Truck,
  Factory,
  Lightbulb,
  Factory,
  Building,
  Building,
  TrendingDown,
];

const integrationIcons = [Database, Sparkles, Zap];

export default function FeaturesClient() {
  const t = useTranslations('features');

  const gradient = (chunks: React.ReactNode) => (
    <span className="gradient-text">{chunks}</span>
  );

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6"
            >
              {t('heroTitle1')}
              <span className="block gradient-text">{t('heroTitle2')}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 mb-8"
            >
              {t('heroSubtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* The footprint chain — CCF → PCF → LCA → EPD */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3"
            >
              {t('chain.heading1')}
              <span className="block gradient-text">{t('chain.heading2')}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600"
            >
              {t('chain.subheading')}
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {toolChain.map((tool, index) => (
              <motion.a
                key={tool.id}
                href={`#${tool.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative rounded-2xl border border-gray-200 bg-white p-6 hover:border-primary-200 hover:shadow-lg transition-all group"
              >
                {index < toolChain.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -end-4 -translate-y-1/2 w-6 h-6 text-primary-300 z-10 rtl:rotate-180" />
                )}
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex p-2.5 rounded-xl bg-primary-100">
                    <tool.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      tool.statusKey === 'live'
                        ? 'bg-accent-100 text-accent-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {t(`chain.status.${tool.statusKey}`)}
                  </span>
                </div>
                <div className="text-xs font-semibold tracking-wide text-primary-600 mb-1">
                  {tool.abbr}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {t(`chain.tools.${tool.id}.name`)}
                </h3>
                <p className="text-sm text-gray-600">{t(`chain.tools.${tool.id}.blurb`)}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features */}
      {mainFeatures.map((feature, index) => (
        <section
          key={feature.id}
          id={feature.id}
          className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 ${feature.chip}`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {t(`main.${feature.id}.name`)}
                  {feature.hasBadge && (
                    <span className="ms-3 align-middle rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                      {t(`main.${feature.id}.badge`)}
                    </span>
                  )}
                </h2>
                <p className="text-lg text-primary-600 font-medium mb-4">
                  {t(`main.${feature.id}.tagline`)}
                </p>
                <p className="text-gray-600 mb-8">
                  {t(`main.${feature.id}.description`)}
                </p>
                <ul className="space-y-3">
                  {(t.raw(`main.${feature.id}.items`) as string[]).map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className="rounded-2xl bg-gradient-to-br from-primary-100 via-secondary-50 to-accent-100 p-2 lg:p-3 shadow-xl">
                  <div className="rounded-xl overflow-hidden bg-white shadow-inner">
                    {feature.image ? (
                      <img
                        src={feature.image}
                        alt={t(`main.${feature.id}.name`)}
                        width={1600}
                        height={1000}
                        decoding="async"
                        className="w-full h-auto"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-3 py-24 px-8 text-center">
                        <div className="inline-flex p-4 rounded-2xl bg-accent-100">
                          <feature.icon className="w-8 h-8 text-accent-600" />
                        </div>
                        <p className="font-semibold text-gray-900">{t(`main.${feature.id}.placeholderTitle`)}</p>
                        <p className="text-sm text-gray-600 max-w-xs">
                          {t(`main.${feature.id}.placeholder`)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Scope 3 Categories Section — deep-pine band (the Canopy forest rail tone) */}
      <section className="py-24 bg-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t('scope3.heading1')}
              <span className="block text-accent-300">{t('scope3.heading2')}</span>
            </h2>
            <p className="text-lg text-secondary-200">
              {t('scope3.subheading')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {scope3Icons.map((CategoryIcon, index) => {
              const number = index + 1;
              return (
                <motion.div
                  key={number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-secondary-800 rounded-xl p-4 hover:bg-secondary-700 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 rounded-lg bg-accent-500/20 flex items-center justify-center text-accent-300 font-bold text-sm">
                      {number}
                    </span>
                    <CategoryIcon className="w-5 h-5 text-secondary-300" />
                  </div>
                  <p className="text-sm text-secondary-100">{t(`scope3.categories.${number}`)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="integrations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.rich('integrations.heading', { gradient })}
            </h2>
            <p className="text-lg text-gray-600">
              {t('integrations.subheading')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {integrationIcons.map((ItemIcon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl border border-gray-200 hover:border-primary-200 hover:shadow-lg transition-all"
              >
                <div className="inline-flex p-4 rounded-xl bg-primary-100 mb-4">
                  <ItemIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t(`integrations.items.${index}.title`)}
                </h3>
                <p className="text-gray-600">{t(`integrations.items.${index}.description`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t('cta.heading')}
          </h2>
          <p className="text-lg text-primary-100 mb-10">
            {t('cta.subheading')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-600 shadow-lg hover:bg-gray-50 transition-all"
            >
              {t('cta.openApp')}
              <ExternalLink className="w-5 h-5" />
            </a>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
            >
              {t('cta.requestDemo')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
