'use client';

/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  BarChart3,
  FileCheck,
  Leaf,
  LineChart,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Database,
  FileSpreadsheet,
  Globe2,
  Zap,
  Target,
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

// The footprint chain — from company footprint to published product declaration
const toolChain = [
  {
    id: 'ghg',
    abbr: 'CCF',
    name: 'Corporate Carbon Footprint',
    status: 'Live',
    blurb: 'Your full organizational GHG inventory — Scopes 1, 2 & 3.',
    icon: BarChart3,
  },
  {
    id: 'pcf',
    abbr: 'PCF',
    name: 'Product Carbon Footprint',
    status: 'Beta',
    blurb: 'Cradle-to-gate footprint per product, exchanged in PACT v3.',
    icon: Package,
  },
  {
    id: 'lca',
    abbr: 'LCA',
    name: 'LCA-lite',
    status: 'Beta',
    blurb: 'Screening-grade impacts beyond carbon — 16 EF 3.1 categories.',
    icon: Leaf,
  },
  {
    id: 'epd',
    abbr: 'EPD',
    name: 'EPD Generator',
    status: 'Beta',
    blurb: 'Verification-ready EN 15804+A2 declaration preparation.',
    icon: FileBadge,
  },
];

const mainFeatures = [
  {
    id: 'ghg',
    name: 'Corporate Carbon Footprint (CCF)',
    tagline: 'Your full GHG inventory — GHG Protocol & ISO 14064-1',
    description: 'Your complete organizational inventory across Scopes 1, 2 and 3 — calculated, screened, and ready for the reports your stakeholders actually ask for.',
    icon: BarChart3,
    chip: 'bg-primary-100 text-primary-600',
    features: [
      'Scopes 1, 2 & 3 — all 15 Scope 3 categories with a screening matrix for completeness',
      'Consolidation approach and reporting boundary declared up front',
      'ISO 14064-1 report plus VSME, ESRS E1 and CDP exports',
      'Base-year & recalculation policy disclosure',
      'Hands off to the read-only Verifier Portal for external verification',
      'Per-row provenance and data-quality tiers behind every figure',
      'AI-powered data extraction from invoices',
      'Real-time dashboard and analytics',
    ],
    image: '/images/dashboard_emissions.png',
  },
  {
    id: 'pcf',
    name: 'Product Carbon Footprint (PCF)',
    tagline: 'Cradle-to-gate footprints per product, exchanged in PACT v3',
    description: 'Model your products’ bills of materials and calculate cradle-to-gate footprints your customers’ systems can actually consume.',
    icon: Package,
    chip: 'bg-accent-100 text-accent-600',
    badge: 'Beta',
    features: [
      'ISO 14067 cradle-to-gate footprint per declared unit',
      'BOM modeling grounded in the same audited factor library',
      'PACT v3 Data Exchange JSON your customers’ systems ingest',
      'Supplier PCF ingestion with primary-data-share tracking',
      'Per-line derivation stories — how each number was calculated',
      'CBAM synergy — shared CN product codes',
    ],
    image: '/images/dashboard_pcf.png',
  },
  {
    id: 'lca',
    name: 'LCA-lite',
    tagline: 'Screening-grade life-cycle impacts beyond carbon',
    description: 'A screening-grade life-cycle assessment computed straight on your PCF models — the EF 3.1 impact method across the EN 15804 lifecycle, with honest disclosure of what the data actually covers.',
    icon: Leaf,
    chip: 'bg-accent-100 text-accent-600',
    badge: 'Beta',
    features: [
      'EF 3.1 impact method — 16 impact categories beyond climate',
      'Results matrix: every indicator × EN 15804 lifecycle modules (A1–D)',
      'Built on your PCF models — no data re-entry',
      'Curated free dataset library to fill impact data',
      'Honest per-indicator data-coverage disclosure — you see exactly what each result rests on',
      'Screening-grade by design — a fast, transparent first pass, not a critical-review LCA',
    ],
    image: null,
    placeholderTitle: 'Live today (Beta)',
    placeholder: 'Screenshot coming — LCA-lite is live in the app today, on the PCF module.',
  },
  {
    id: 'epd',
    name: 'EPD Generator',
    tagline: 'Verification-ready EPDs — published by your program operator',
    description: 'Turn a verified footprint into an ISO 14025 / EN 15804+A2 declaration package. We prepare the EPD end-to-end; your program operator reviews and publishes it — we do not issue EPDs ourselves.',
    icon: FileBadge,
    chip: 'bg-primary-100 text-primary-600',
    badge: 'Beta',
    features: [
      'Pins a verified footprint snapshot — the declaration never drifts from its data',
      'EN 15804 core + additional indicator results tables',
      'EN 15804-structured PDF plus ILCD+EPD digital dataset (machine-readable EPD)',
      'Third-party verification workflow through the token-gated verifier portal',
      '5-year validity tracking',
      'Program-operator registration tracking — publication stays with your operator',
    ],
    image: null,
    placeholderTitle: 'In Beta',
    placeholder: 'Being built right now — declaration preparation on top of your verified PCF + LCA results.',
  },
  {
    id: 'verifier',
    name: 'Verifier Portal',
    tagline: 'Give your auditor a window, not a spreadsheet',
    description: 'External verifiers get read-only access to the inventory they’re verifying — with the provenance behind every number, and none of the email ping-pong.',
    icon: ShieldCheck,
    chip: 'bg-secondary-100 text-secondary-600',
    features: [
      'Read-only, token-gated access for external verifiers',
      'Full inventory with per-row provenance',
      'Audit log of every change and every visit',
      'Revocable, period-scoped — no verifier account needed',
      'Built for ISO 14064-3 verification (remote allowed per ISO 14064-5)',
    ],
    image: null,
    placeholderTitle: 'Live today',
    placeholder: 'Screenshot coming — the portal is live in the app today.',
  },
  {
    id: 'cbam',
    name: 'CBAM Compliance',
    tagline: 'EU Carbon Border Adjustment Made Easy',
    description: 'Stay compliant with EU CBAM regulations with automated reporting and certificate management.',
    icon: FileCheck,
    chip: 'bg-secondary-100 text-secondary-600',
    badge: 'Beta',
    features: [
      '20+ CBAM product categories supported',
      'Quarterly reporting automation',
      'Certificate cost calculation',
      'XML report generation for EU submission',
      'Installation and import tracking',
      'Country-specific emission factors',
    ],
    image: '/images/dashboard_cbam.png',
  },
  {
    id: 'scenarios',
    name: 'Scenario Planning',
    tagline: 'Plan Your Path to Net-Zero',
    description: 'Model different reduction scenarios and initiatives to achieve your sustainability goals.',
    icon: LineChart,
    chip: 'bg-primary-100 text-primary-600',
    badge: 'Beta',
    features: [
      'What-if scenario modeling',
      'Initiative impact projection',
      'Cost-benefit analysis',
      'Timeline-based planning',
      'Progress tracking and reporting',
      'Science-based target alignment',
    ],
    image: '/images/dashboard_scenarios.png',
  },
];

const scope3Categories = [
  { number: '1', name: 'Purchased Goods & Services', icon: FileSpreadsheet },
  { number: '2', name: 'Capital Goods', icon: Building },
  { number: '3', name: 'Fuel & Energy Activities', icon: Zap },
  { number: '4', name: 'Upstream Transportation', icon: Truck },
  { number: '5', name: 'Waste Generated', icon: Factory },
  { number: '6', name: 'Business Travel', icon: Globe2 },
  { number: '7', name: 'Employee Commuting', icon: Truck },
  { number: '8', name: 'Upstream Leased Assets', icon: Building },
  { number: '9', name: 'Downstream Transportation', icon: Truck },
  { number: '10', name: 'Processing of Sold Products', icon: Factory },
  { number: '11', name: 'Use of Sold Products', icon: Lightbulb },
  { number: '12', name: 'End-of-Life Treatment', icon: Factory },
  { number: '13', name: 'Downstream Leased Assets', icon: Building },
  { number: '14', name: 'Franchises', icon: Building },
  { number: '15', name: 'Investments', icon: TrendingDown },
];

export default function FeaturesPage() {
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
              Powerful Features for
              <span className="block gradient-text">Complete Carbon Management</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 mb-8"
            >
              Everything you need to track, report, and reduce your environmental
              footprint in one comprehensive platform.
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
              One data spine, four tools:
              <span className="block gradient-text">from company footprint to published product declaration</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600"
            >
              Each tool builds on the one before it — the corporate inventory feeds product
              footprints, product footprints feed screening LCA, and a verified footprint
              becomes an EPD your program operator publishes. No data re-entry between steps.
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
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 w-6 h-6 text-primary-300 z-10" />
                )}
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex p-2.5 rounded-xl bg-primary-100">
                    <tool.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      tool.status === 'Live'
                        ? 'bg-accent-100 text-accent-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {tool.status}
                  </span>
                </div>
                <div className="text-xs font-semibold tracking-wide text-primary-600 mb-1">
                  {tool.abbr}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-600">{tool.blurb}</p>
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
                  {feature.name}
                  {feature.badge && (
                    <span className="ml-3 align-middle rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                      {feature.badge}
                    </span>
                  )}
                </h2>
                <p className="text-lg text-primary-600 font-medium mb-4">
                  {feature.tagline}
                </p>
                <p className="text-gray-600 mb-8">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.features.map((item) => (
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
                        alt={feature.name}
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
                        <p className="font-semibold text-gray-900">{feature.placeholderTitle}</p>
                        <p className="text-sm text-gray-600 max-w-xs">
                          {feature.placeholder}
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
              All 15 Scope 3 Categories
              <span className="block text-accent-300">Fully Supported</span>
            </h2>
            <p className="text-lg text-secondary-200">
              Comprehensive coverage of the complete GHG Protocol Scope 3 standard.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {scope3Categories.map((category, index) => (
              <motion.div
                key={category.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-secondary-800 rounded-xl p-4 hover:bg-secondary-700 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-lg bg-accent-500/20 flex items-center justify-center text-accent-300 font-bold text-sm">
                    {category.number}
                  </span>
                  <category.icon className="w-5 h-5 text-secondary-300" />
                </div>
                <p className="text-sm text-secondary-100">{category.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="integrations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Seamless <span className="gradient-text">Integrations</span>
            </h2>
            <p className="text-lg text-gray-600">
              Connect with your existing tools and data sources for automated data collection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Data Import',
                description: 'Import data from Excel, CSV, or connect via API',
                icon: Database,
              },
              {
                title: 'AI Extraction',
                description: 'Automatically extract data from invoices and documents',
                icon: Sparkles,
              },
              {
                title: 'Real-time Sync',
                description: 'Keep your emissions data up-to-date automatically',
                icon: Zap,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl border border-gray-200 hover:border-primary-200 hover:shadow-lg transition-all"
              >
                <div className="inline-flex p-4 rounded-xl bg-primary-100 mb-4">
                  <item.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to See These Features in Action?
          </h2>
          <p className="text-lg text-primary-100 mb-10">
            Experience the full power of CLIMATRIX carbon management platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-600 shadow-lg hover:bg-gray-50 transition-all"
            >
              Open App
              <ExternalLink className="w-5 h-5" />
            </a>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
