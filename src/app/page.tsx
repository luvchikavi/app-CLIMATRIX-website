'use client';

/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Pricing from '@/components/Pricing';
import {
  BarChart3,
  FileCheck,
  Leaf,
  LineChart,
  Shield,
  Sparkles,
  CheckCircle2,
  Building2,
  Globe2,
  Clock,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Users,
  Target,
  Award,
  TrendingDown,
  FileSpreadsheet,
  Linkedin,
  Mail,
  Zap,
  ArrowRight,
} from 'lucide-react';

// The live platform app (climatrix.co is the one brand domain)
const APP_URL = 'https://app.climatrix.co';
// Public no-login demo — drop a file, see calculated results
const TRY_URL = 'https://app.climatrix.co/try';
// Free public CBAM exemption checker — no signup
const CBAM_CHECK_URL = 'https://app.climatrix.co/cbam-check';

const screenshots = [
  {
    id: 'hub',
    title: 'The Data Hub',
    description: 'One living map of your inventory — what\u2019s relevant, what\u2019s arrived, what\u2019s still missing, and who to chase',
    image: '/images/screenshots/hub.png',
  },
  {
    id: 'dashboard',
    title: 'Dashboard Overview',
    description: 'Your footprint per year, per site, or all together — with drill-downs behind every number',
    image: '/images/screenshots/dashboard.png',
  },
  {
    id: 'activities',
    title: 'Activity Ledger',
    description: 'Every committed emission line, with its factor, source and data-quality grade',
    image: '/images/screenshots/activities.png',
  },
  {
    id: 'reports',
    title: 'Reports & Audit',
    description: 'Scope summaries, GHG inventory, data quality and audit package — export-ready',
    image: '/images/screenshots/reports.png',
  },
];

const features: {
  name: string;
  description: string;
  icon: typeof BarChart3;
  color: string;
  badge?: string;
}[] = [
  {
    name: 'The Data Hub',
    description:
      'One living map of your inventory: declare which GHG categories are relevant, see what data arrived, what quality it has, and exactly what is still missing — with a chase list of who to ask.',
    icon: Target,
    color: 'from-primary-500 to-secondary-400',
  },
  {
    name: 'AI Smart Import',
    description:
      'Drop any spreadsheet — fuel cards, utility bills, ERP spend dumps. The parser knows your organization before it reads a row and maps every line to the right scope and category.',
    icon: Sparkles,
    color: 'from-primary-500 to-accent-400',
  },
  {
    name: 'Honest data quality',
    description:
      'Every line lands on a ladder: measured / calculated / estimated / gap. Estimates never masquerade as measured data — so a verifier can trust the number.',
    icon: BarChart3,
    color: 'from-secondary-500 to-accent-400',
  },
  {
    name: 'Reports & audit trail',
    description:
      'Full Scope 1, 2 and 3 reporting with the factor, source and formula behind every figure — plus an audit package and verification workflow.',
    icon: FileCheck,
    color: 'from-secondary-500 to-primary-400',
  },
  {
    name: 'Decarbonization planning',
    description: 'Model reduction scenarios and plan your path to net-zero on top of real data.',
    icon: LineChart,
    color: 'from-accent-500 to-primary-400',
    badge: 'Beta',
  },
  {
    name: 'CBAM Compliance',
    description:
      'EU Carbon Border Adjustment Mechanism support: quarterly reports and certificate costs — plus a free exemption checker anyone can run, no signup.',
    icon: Shield,
    color: 'from-accent-500 to-secondary-400',
    badge: 'Beta',
  },
];

const stats = [
  { value: 'All 15', label: 'Scope 3 Categories', icon: BarChart3 },
  { value: 'Minutes', label: 'From File to Footprint', icon: Zap },
  { value: '20+', label: 'CBAM Product Groups', icon: FileCheck },
  { value: 'ISO 14064', label: 'Audit-Ready Methodology', icon: Leaf },
];

const aboutPoints = [
  {
    icon: Target,
    title: '1 · Declare your reality',
    description:
      'Country, sites, currency, and which GHG categories apply to you — a two-minute setup that becomes your reporting boundary.',
  },
  {
    icon: TrendingDown,
    title: '2 · Drop your files, any format',
    description:
      'Utility bills, fuel cards, travel exports, ERP dumps. The AI reads them through your profile and maps every line — in seconds, not weeks.',
  },
  {
    icon: Award,
    title: '3 · Review, close gaps, report',
    description:
      'The Data Hub shows what arrived, its quality, and what is missing. Answer the few real questions, commit, and export a defensible inventory.',
  },
  {
    icon: Users,
    title: 'Built on the standards',
    description: 'GHG Protocol, ISO 14064, CSRD — audit-ready methodology built in.',
  },
];

// Floating orbs for background
const FloatingOrb = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

export default function Home() {
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  // Auto-rotate screenshots
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextScreenshot = () => {
    setActiveScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setActiveScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className="overflow-hidden relative">
      {/* Floating background orbs */}
      <FloatingOrb className="w-96 h-96 bg-primary-300 top-20 -left-48" delay={0} />
      <FloatingOrb className="w-80 h-80 bg-accent-300 top-96 right-0" delay={2} />
      <FloatingOrb className="w-72 h-72 bg-accent-300 bottom-96 left-1/4" delay={4} />
      <FloatingOrb className="w-64 h-64 bg-secondary-200 bottom-20 right-1/4" delay={1} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 glass-card px-5 py-2 text-sm font-medium text-primary-700 mb-8">
                <Sparkles className="w-4 h-4 text-primary-500" />
                Now live — AI-powered carbon accounting
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8"
            >
              Drop your messy data.
              <span className="block gradient-text text-glow mt-2">Get an audit-ready inventory.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Track GHG emissions, ensure CBAM compliance, and manage your environmental
              footprint with the most advanced carbon accounting platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl animated-gradient px-8 py-4 text-lg font-semibold text-white shadow-2xl hover:scale-105 transition-all duration-300 shine-effect"
              >
                Try it free for 14 days
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={CBAM_CHECK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl glass-card px-8 py-4 text-lg font-semibold text-primary-700 hover:scale-105 transition-all duration-300"
              >
                <Shield className="w-5 h-5" />
                Free CBAM check
              </a>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-2xl glass-card px-8 py-4 text-lg font-semibold text-gray-900 hover:scale-105 transition-all duration-300"
              >
                Request Demo
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500"
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                No credit card required
              </span>
            </motion.div>
          </div>

          {/* Stats - Floating Glass Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card p-6 text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary-500" />
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Try-it strip — two zero-commitment doors: the live demo and the CBAM checker */}
      <section className="relative pb-24 -mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.a
              href={TRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 flex items-start gap-5 group"
            >
              <div className="p-4 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-400 shadow-lg shrink-0">
                <FileSpreadsheet className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Try it on your own file
                </h3>
                <p className="text-gray-600 mb-3">
                  Drop a messy spreadsheet into the live demo and watch it become
                  calculated emissions — no signup, no sales call.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 group-hover:gap-2.5 transition-all">
                  Open the live demo <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>

            <motion.a
              href={CBAM_CHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 flex items-start gap-5 group"
            >
              <div className="p-4 rounded-2xl bg-gradient-to-r from-secondary-500 to-primary-400 shadow-lg shrink-0">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Exporting to the EU? Check your CBAM exposure
                </h3>
                <p className="text-gray-600 mb-3">
                  Answer a few questions and know in about two minutes whether the
                  Carbon Border Adjustment Mechanism applies to your goods — free.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 group-hover:gap-2.5 transition-all">
                  Run the free CBAM check <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                How <span className="gradient-text">CLIMATRIX</span> works
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The hard part of carbon accounting isn't the math — it's gathering messy
                data from finance, fleet, facilities and suppliers, and making it
                defensible. CLIMATRIX is built around a Data Hub that does exactly that.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Three steps: declare your reality, drop your files, review and report —
                with every number carrying its factor, formula and quality grade.
              </p>

              <div className="glass-card p-6 flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl animated-gradient flex items-center justify-center shadow-lg">
                    <Leaf className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">CLIMATRIX</div>
                    <div className="text-sm text-gray-500">Technology</div>
                  </div>
                </div>

              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-5">
              {aboutPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-6 hover:glow transition-shadow duration-300"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${
                    index === 0 ? 'from-primary-500 to-accent-400' :
                    index === 1 ? 'from-accent-500 to-primary-400' :
                    index === 2 ? 'from-secondary-500 to-primary-400' :
                    'from-secondary-500 to-accent-400'
                  } mb-4 shadow-lg`}>
                    <point.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{point.title}</h3>
                  <p className="text-sm text-gray-600">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              See <span className="gradient-text">CLIMATRIX</span> In Action
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features that make carbon management effortless.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card p-3 overflow-hidden">
              {/* Fixed 16:10 box (all screenshots are 1600x1000) so slide swaps
                  never change the carousel's height — this was the page-wide
                  "jumping boxes" source, re-firing every 5s auto-rotate */}
              <div className="relative w-full aspect-[16/10] max-h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScreenshot}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 rounded-xl overflow-hidden"
                  >
                    <img
                      src={screenshots[activeScreenshot].image}
                      alt={screenshots[activeScreenshot].title}
                      width={1600}
                      height={1000}
                      decoding="async"
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <button
                onClick={prevScreenshot}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={nextScreenshot}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-all"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Info & Tabs — min-h reserves room for the longest caption so
                slide changes don't push the sections below */}
            <div className="mt-8 text-center min-h-[8.5rem] sm:min-h-[5.5rem]">
              <h3 className="text-2xl font-bold text-gray-900">{screenshots[activeScreenshot].title}</h3>
              <p className="text-gray-600 mt-2">{screenshots[activeScreenshot].description}</p>
            </div>

            <div className="mt-6 flex justify-center gap-3">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveScreenshot(index)}
                  className="w-8 h-2 flex items-center justify-center"
                >
                  <span
                    className={`h-2 rounded-full transition-[width] duration-300 ${
                      index === activeScreenshot
                        ? 'w-8 bg-gradient-to-r from-primary-500 to-secondary-500'
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              What's inside <span className="gradient-text">the platform</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From emissions tracking to compliance reporting, all tools in one platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card p-8 hover:glow transition-shadow duration-300 group"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.name}
                  {feature.badge && (
                    <span className="ml-2 align-middle rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                      {feature.badge}
                    </span>
                  )}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                <span className="gradient-text">Enterprise-Grade</span> Security
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Your data security is our top priority. Built with the highest
                security standards and compliance frameworks.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Shield, text: 'Encrypted at Rest & in Transit', color: 'from-primary-500 to-accent-400' },
                  { icon: Globe2, text: 'GDPR Compliant', color: 'from-accent-500 to-primary-400' },
                  { icon: Clock, text: 'Comprehensive Audit Logging', color: 'from-secondary-500 to-primary-400' },
                  { icon: Building2, text: 'Multi-tenant Data Isolation', color: 'from-secondary-500 to-accent-400' },
                  { icon: FileSpreadsheet, text: 'GHG Protocol Aligned', color: 'from-accent-500 to-secondary-400' },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg text-gray-700 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card p-12 text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-3xl animated-gradient flex items-center justify-center shadow-2xl floating">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Your data is encrypted and protected 24/7</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Pricing />

      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 lg:p-16 text-center relative overflow-hidden"
          >
            {/* Background gradient — static: the animated version repainted
                this full-bleed layer every frame, forever */}
            <div className="absolute inset-0 gradient-bg opacity-10" />

            <div className="relative">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Ready to Start Your <span className="gradient-text">Sustainability Journey</span>?
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Join leading companies using CLIMATRIX to track, report, and reduce
                their carbon footprint.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#pricing"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl animated-gradient px-10 py-5 text-lg font-bold text-white shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Try it free for 14 days
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl glass px-10 py-5 text-lg font-bold text-gray-900 hover:scale-105 transition-all duration-300"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
