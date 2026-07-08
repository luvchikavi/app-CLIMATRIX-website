'use client';

/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
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

// The live platform (real domain is climEtrix.io — climatrix.io is unrelated)
const APP_URL = 'https://climetrix.io';
// Public no-login demo — drop a file, see calculated results
const TRY_URL = 'https://climetrix.io/try';

const screenshots = [
  {
    id: 'dashboard',
    title: 'Dashboard Overview',
    description: 'Get a complete view of your carbon footprint with real-time metrics and trend analysis',
    image: '/images/screenshots/dashboard.png',
  },
  {
    id: 'emissions',
    title: 'Emissions Tracking',
    description: 'Track Scope 1, 2, and 3 emissions with detailed breakdowns by category and source',
    image: '/images/screenshots/emissions.png',
  },
  {
    id: 'cbam',
    title: 'CBAM Compliance',
    description: 'EU Carbon Border Adjustment Mechanism reporting with automatic certificate calculations',
    image: '/images/screenshots/cbam.png',
  },
  {
    id: 'scenarios',
    title: 'Scenario Planning',
    description: 'Model reduction initiatives and track your path to net-zero with confidence',
    image: '/images/screenshots/scenarios.png',
  },
];

const features = [
  {
    name: 'GHG Emissions Tracking',
    description: 'Complete Scope 1, 2, and 3 emissions tracking with AI-powered data extraction.',
    icon: BarChart3,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'CBAM Compliance',
    description: 'Full EU Carbon Border Adjustment Mechanism support with quarterly reporting.',
    icon: FileCheck,
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'LCA & EPD Management',
    description: 'Life Cycle Assessment and Environmental Product Declaration management.',
    icon: Leaf,
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Scenario Planning',
    description: 'Model reduction scenarios and plan your path to net-zero.',
    icon: LineChart,
    color: 'from-orange-500 to-amber-500',
  },
  {
    name: 'AI-Powered Insights',
    description: 'Intelligent data processing and recommendations powered by AI.',
    icon: Sparkles,
    color: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Enterprise Security',
    description: 'SOC 2 ready with comprehensive audit logging and GDPR compliance.',
    icon: Shield,
    color: 'from-cyan-500 to-teal-500',
  },
];

const stats = [
  { value: '15+', label: 'Scope 3 Categories', icon: BarChart3 },
  { value: '99.9%', label: 'Uptime SLA', icon: Zap },
  { value: '20+', label: 'CBAM Products', icon: FileCheck },
  { value: '50+', label: 'Emission Factors', icon: Leaf },
];

const teamMembers = [
  {
    name: 'Avi Luvchik',
    role: 'CEO',
    company: 'CLIMATRIX',
    image: '/images/team/avi.jpeg',
    bio: 'Dr. Luvchik serves as an advisor and Board Member in various companies in the field of climate tech and sustainability.',
    linkedin: 'https://www.linkedin.com/in/avi-luvchik-phd-987a981b',
  },
  {
    name: 'Lihie Iuclea',
    role: 'CSO',
    company: 'BDO',
    image: '/images/team/lihie.jpeg',
    bio: 'International consultant to UNEP on climate policy. Head of ESG at BDO, guiding organizations in ESG strategy.',
    linkedin: 'https://www.linkedin.com/in/lihieiuclea/',
  },
  {
    name: 'Chezi Shpaisman',
    role: 'CTO',
    company: 'CLIMATRIX',
    image: '/images/team/chezi.jpeg',
    bio: 'Founder & Principal at Sakkoya Data Management Solutions. Expert in data architecture and enterprise systems.',
    linkedin: 'https://www.linkedin.com/in/chezi-shpaisman/',
  },
  {
    name: 'Leehee Goldenberg',
    role: 'CRO',
    company: 'CLIMATRIX',
    image: '/images/team/leehee.jpeg',
    bio: 'Lawyer and policy professional specializing in energy, infrastructure, and climate governance.',
    linkedin: 'https://www.linkedin.com/in/leehee-goldenberg-62255523/',
  },
];

const aboutPoints = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'Democratize carbon accounting for organizations of all sizes.',
  },
  {
    icon: TrendingDown,
    title: 'Our Impact',
    description: 'Helping track and reduce 500,000+ tonnes CO2e annually.',
  },
  {
    icon: Award,
    title: 'Our Standards',
    description: 'Built on GHG Protocol, ISO 14064, CSRD, and CBAM.',
  },
  {
    icon: Users,
    title: 'Our Partnership',
    description: 'Backed by BDO, a global leader in professional services.',
  },
];

// Floating orbs for background
const FloatingOrb = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
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
      <FloatingOrb className="w-96 h-96 bg-blue-400 top-20 -left-48" delay={0} />
      <FloatingOrb className="w-80 h-80 bg-purple-400 top-96 right-0" delay={2} />
      <FloatingOrb className="w-72 h-72 bg-green-400 bottom-96 left-1/4" delay={4} />
      <FloatingOrb className="w-64 h-64 bg-pink-400 bottom-20 right-1/4" delay={1} />

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
                Powered by AI in 2026
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
              Carbon Accounting
              <span className="block gradient-text text-glow mt-2">Made Simple</span>
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
                href={TRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl animated-gradient px-8 py-4 text-lg font-semibold text-white shadow-2xl hover:scale-105 transition-all duration-300 shine-effect"
              >
                Try it now — drop a file
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl glass-card px-8 py-4 text-lg font-semibold text-gray-900 hover:scale-105 transition-all duration-300"
              >
                Open App
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
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
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
                className="glass-card p-6 text-center hover:scale-105 transition-all duration-300"
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
                About <span className="gradient-text">CLIMATRIX</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                CLIMATRIX is a comprehensive carbon accounting platform designed to help
                organizations measure, track, and reduce their environmental impact. Built
                in partnership with BDO, we combine cutting-edge technology with deep
                sustainability expertise.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our platform supports the full lifecycle of carbon management from data
                collection to reporting and reduction planning.
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
                <div className="text-3xl text-gray-300 font-light">+</div>
                <div className="flex items-center gap-3">
                  <img src="/images/BDO_Deutsche_Warentreuhand_Logo.svg" alt="BDO" className="h-12 w-auto" />
                  <div>
                    <div className="font-bold text-gray-900">BDO</div>
                    <div className="text-sm text-gray-500">Advisory</div>
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
                  className="glass-card p-6 hover:glow transition-all duration-300"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${
                    index === 0 ? 'from-blue-500 to-cyan-500' :
                    index === 1 ? 'from-green-500 to-emerald-500' :
                    index === 2 ? 'from-purple-500 to-pink-500' :
                    'from-orange-500 to-amber-500'
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
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScreenshot}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-xl overflow-hidden"
                >
                  <img
                    src={screenshots[activeScreenshot].image}
                    alt={screenshots[activeScreenshot].title}
                    className="w-full h-auto max-h-[500px] object-contain rounded-xl"
                  />
                </motion.div>
              </AnimatePresence>

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

            {/* Info & Tabs */}
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900">{screenshots[activeScreenshot].title}</h3>
              <p className="text-gray-600 mt-2">{screenshots[activeScreenshot].description}</p>
            </div>

            <div className="mt-6 flex justify-center gap-3">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveScreenshot(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeScreenshot
                      ? 'w-8 bg-gradient-to-r from-primary-500 to-secondary-500'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
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
              Everything for <span className="gradient-text">Carbon Management</span>
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
                className="glass-card p-8 hover:glow transition-all duration-300 group"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600">
              Sustainability innovators and world-class advisory expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card p-6 text-center hover:glow transition-all duration-300"
              >
                <div className="relative w-28 h-28 mx-auto mb-5">
                  <div className="absolute inset-0 rounded-full animated-gradient opacity-50 blur-md" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-primary-600 font-semibold">{member.role}</p>
                <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold ${
                  member.company === 'CLIMATRIX'
                    ? 'bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700'
                    : 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700'
                }`}>
                  {member.company}
                </span>
                <p className="text-sm text-gray-600 mt-4 leading-relaxed">{member.bio}</p>
                <div className="mt-5 flex justify-center gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass hover:scale-110 transition-all"
                  >
                    <Linkedin className="w-5 h-5 text-primary-600" />
                  </a>
                  <a
                    href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@climatrix.com`}
                    className="p-2.5 rounded-xl glass hover:scale-110 transition-all"
                  >
                    <Mail className="w-5 h-5 text-primary-600" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
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
                  { icon: Shield, text: 'SOC 2 Type I Ready', color: 'from-blue-500 to-cyan-500' },
                  { icon: Globe2, text: 'GDPR Compliant', color: 'from-green-500 to-emerald-500' },
                  { icon: Clock, text: 'Comprehensive Audit Logging', color: 'from-purple-500 to-pink-500' },
                  { icon: Building2, text: 'Multi-tenant Data Isolation', color: 'from-orange-500 to-amber-500' },
                  { icon: FileSpreadsheet, text: 'GHG Protocol Aligned', color: 'from-cyan-500 to-teal-500' },
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
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 lg:p-16 text-center relative overflow-hidden"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 animated-gradient opacity-10" />

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
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl animated-gradient px-10 py-5 text-lg font-bold text-white shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
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
