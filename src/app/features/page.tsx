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
} from 'lucide-react';

// The live platform app
const APP_URL = 'https://app.climatrix.co';

const mainFeatures = [
  {
    id: 'ghg',
    name: 'GHG Emissions Tracking',
    tagline: 'Complete Carbon Footprint Management',
    description: 'Track and manage your greenhouse gas emissions across all three scopes with precision and ease.',
    icon: BarChart3,
    chip: 'bg-primary-100 text-primary-600',
    features: [
      'Scope 1: Direct emissions from owned sources',
      'Scope 2: Indirect emissions from purchased energy',
      'Scope 3: All 15 upstream and downstream categories',
      'AI-powered data extraction from invoices',
      'Automated emission factor matching',
      'Real-time dashboard and analytics',
    ],
    image: '/images/dashboard_emissions.png',
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
    id: 'lca',
    name: 'LCA & EPD Management',
    tagline: 'Product Environmental Transparency',
    description: 'Conduct life cycle assessments and manage environmental product declarations for your products.',
    icon: Leaf,
    chip: 'bg-accent-100 text-accent-600',
    badge: 'On the roadmap',
    features: [
      'Cradle-to-grave life cycle assessment',
      'EPD creation and management',
      'Impact category analysis (GWP, AP, EP, etc.)',
      'PCR compliance checking',
      'Third-party verification support',
      'Public EPD registry integration',
    ],
    image: null,
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
                        className="w-full h-auto"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-3 py-24 px-8 text-center">
                        <div className="inline-flex p-4 rounded-2xl bg-accent-100">
                          <feature.icon className="w-8 h-8 text-accent-600" />
                        </div>
                        <p className="font-semibold text-gray-900">In design</p>
                        <p className="text-sm text-gray-600 max-w-xs">
                          Ships with the LCA module — built on the same data you
                          already collect.
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
