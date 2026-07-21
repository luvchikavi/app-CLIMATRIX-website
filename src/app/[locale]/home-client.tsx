'use client';

/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
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
  ChevronLeft,
  ChevronRight,
  Users,
  Target,
  Award,
  TrendingDown,
  FileSpreadsheet,
  Zap,
  ArrowRight,
  Package,
  ShieldCheck,
  FileBadge,
} from 'lucide-react';

// The live platform app (climatrix.co is the one brand domain)
const APP_URL = 'https://app.climatrix.co';
// Public no-login demo — drop a file, see calculated results
const TRY_URL = 'https://app.climatrix.co/try';
// Free public CBAM exemption checker — no signup
const CBAM_CHECK_URL = 'https://app.climatrix.co/cbam-check';

// Copy for these lives in the message catalogs (home.*), keyed by index.
const screenshots = [
  { id: 'hub', image: '/images/screenshots/hub.png' },
  { id: 'dashboard', image: '/images/screenshots/dashboard.png' },
  { id: 'activities', image: '/images/screenshots/activities.png' },
  { id: 'reports', image: '/images/screenshots/reports.png' },
];

const features: {
  icon: typeof BarChart3;
  color: string;
  hasBadge?: boolean;
}[] = [
  { icon: Target, color: 'from-primary-500 to-secondary-400' },
  { icon: Sparkles, color: 'from-primary-500 to-accent-400' },
  { icon: BarChart3, color: 'from-secondary-500 to-accent-400' },
  { icon: FileCheck, color: 'from-secondary-500 to-primary-400' },
  { icon: LineChart, color: 'from-accent-500 to-primary-400', hasBadge: true },
  { icon: Shield, color: 'from-accent-500 to-secondary-400', hasBadge: true },
  { icon: Package, color: 'from-primary-500 to-accent-400', hasBadge: true },
  { icon: Leaf, color: 'from-accent-500 to-secondary-400', hasBadge: true },
  { icon: FileBadge, color: 'from-secondary-500 to-accent-400', hasBadge: true },
  { icon: ShieldCheck, color: 'from-secondary-500 to-primary-400' },
];

const statIcons = [BarChart3, Zap, FileCheck, Leaf];

const aboutIcons = [Target, TrendingDown, Award, Users];

const securityItems = [
  { icon: Shield, color: 'from-primary-500 to-accent-400' },
  { icon: Globe2, color: 'from-accent-500 to-primary-400' },
  { icon: Clock, color: 'from-secondary-500 to-primary-400' },
  { icon: Building2, color: 'from-secondary-500 to-accent-400' },
  { icon: FileSpreadsheet, color: 'from-accent-500 to-secondary-400' },
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

export default function HomeClient() {
  const t = useTranslations('home');
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  const gradient = (chunks: React.ReactNode) => (
    <span className="gradient-text">{chunks}</span>
  );

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
                {t('badge')}
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
              {t('heroTitle1')}
              <span className="block gradient-text text-glow mt-2">{t('heroTitle2')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              {t('heroSubtitle')}
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
                {t('ctaTrial')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
              </a>
              <a
                href={CBAM_CHECK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl glass-card px-8 py-4 text-lg font-semibold text-primary-700 hover:scale-105 transition-all duration-300"
              >
                <Shield className="w-5 h-5" />
                {t('ctaCbam')}
              </a>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-2xl glass-card px-8 py-4 text-lg font-semibold text-gray-900 hover:scale-105 transition-all duration-300"
              >
                {t('ctaDemo')}
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
                {t('trialNote')}
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                {t('noCard')}
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
            {statIcons.map((StatIcon, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <StatIcon className="w-8 h-8 mx-auto mb-3 text-primary-500" />
                <div className="text-3xl font-bold gradient-text">{t(`stats.${index}.value`)}</div>
                <div className="text-sm text-gray-600 mt-1">{t(`stats.${index}.label`)}</div>
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
                  {t('try.fileTitle')}
                </h3>
                <p className="text-gray-600 mb-3">
                  {t('try.fileBody')}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 group-hover:gap-2.5 transition-all">
                  {t('try.fileCta')} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
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
                  {t('try.cbamTitle')}
                </h3>
                <p className="text-gray-600 mb-3">
                  {t('try.cbamBody')}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 group-hover:gap-2.5 transition-all">
                  {t('try.cbamCta')} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
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
                {t.rich('about.heading', { gradient })}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('about.p1')}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('about.p2')}
              </p>

              <div className="glass-card p-6 flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl animated-gradient flex items-center justify-center shadow-lg">
                    <Leaf className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">CLIMATRIX</div>
                    <div className="text-sm text-gray-500">{t('about.brandSub')}</div>
                  </div>
                </div>

              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-5">
              {aboutIcons.map((PointIcon, index) => (
                <motion.div
                  key={index}
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
                    <PointIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{t(`about.points.${index}.title`)}</h3>
                  <p className="text-sm text-gray-600">{t(`about.points.${index}.description`)}</p>
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
              {t.rich('screens.heading', { gradient })}
            </h2>
            <p className="text-xl text-gray-600">
              {t('screens.subheading')}
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
                      alt={t(`screenshots.${activeScreenshot}.title`)}
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
              <h3 className="text-2xl font-bold text-gray-900">{t(`screenshots.${activeScreenshot}.title`)}</h3>
              <p className="text-gray-600 mt-2">{t(`screenshots.${activeScreenshot}.description`)}</p>
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
              {t.rich('featuresSection.heading', { gradient })}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('featuresSection.subheading')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
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
                  {t(`featuresSection.items.${index}.name`)}
                  {feature.hasBadge && (
                    <span className="ms-2 align-middle rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                      {t(`featuresSection.items.${index}.badge`)}
                    </span>
                  )}
                </h3>
                <p className="text-gray-600">{t(`featuresSection.items.${index}.description`)}</p>
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
                {t.rich('security.heading', { gradient })}
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                {t('security.subheading')}
              </p>
              <div className="space-y-4">
                {securityItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg text-gray-700 font-medium">{t(`security.items.${index}`)}</span>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('security.cardTitle')}</h3>
                <p className="text-gray-600">{t('security.cardBody')}</p>
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
                {t.rich('cta.heading', { gradient })}
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                {t('cta.subheading')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#pricing"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl animated-gradient px-10 py-5 text-lg font-bold text-white shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  {t('cta.trial')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl glass px-10 py-5 text-lg font-bold text-gray-900 hover:scale-105 transition-all duration-300"
                >
                  {t('cta.demo')}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
