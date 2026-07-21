'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  CheckCircle2,
  Mail,
  Send,
  Clock,
  Users,
  Building,
  Calendar,
} from 'lucide-react';

// Submitted values stay in English so the CRM data is locale-independent;
// the visible labels come from the message catalogs (demo.form.sizes).
const companySizes = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '500+ employees',
];

const whyIcons = [Users, Building, CheckCircle2];

export default function DemoClient() {
  const t = useTranslations('demo');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    companySize: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Same-origin proxy → platform CRM (source: website_demo)
      const res = await fetch('/api/demo-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('capture failed');
      setSubmitted(true);
    } catch {
      // Never dead-end a prospect: surface the direct channel.
      alert(t('form.errorAlert'));
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                {t('heroTitle1')}
                <span className="block gradient-text">{t('heroTitle2')}</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                {t('heroSubtitle')}
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('whatYouGet')}
                </h3>
                <ul className="space-y-3">
                  {(t.raw('benefits') as string[]).map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('duration')}</p>
                    <p className="font-semibold text-gray-900">{t('durationValue')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary-100 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('response')}</p>
                    <p className="font-semibold text-gray-900">{t('responseValue')}</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t('reachOut')}
                </h3>
                <a
                  href="mailto:avi@climatrix.co"
                  className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  avi@climatrix.co
                </a>
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-accent-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {t('form.thanksTitle')}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {t('form.thanksBody')}
                  </p>
                  <a
                    href="https://app.climatrix.co/register"
                    className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-all"
                  >
                    {t('form.startTrialNow')}
                  </a>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {t('form.title')}
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t('form.firstName')}
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                          placeholder={t('form.firstNamePlaceholder')}
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t('form.lastName')}
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                          placeholder={t('form.lastNamePlaceholder')}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t('form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        placeholder={t('form.emailPlaceholder')}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t('form.company')}
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                          placeholder={t('form.companyPlaceholder')}
                        />
                      </div>
                      <div>
                        <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t('form.companySize')}
                        </label>
                        <select
                          id="companySize"
                          name="companySize"
                          required
                          value={formData.companySize}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
                        >
                          <option value="">{t('form.selectSize')}</option>
                          {companySizes.map((size, index) => (
                            <option key={size} value={size}>
                              {t(`form.sizes.${index}`)}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t('form.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        placeholder={t('form.phonePlaceholder')}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t('form.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                        placeholder={t('form.messagePlaceholder')}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 gradient-bg text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {t('form.submitting')}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 rtl:-scale-x-100" />
                          {t('form.submit')}
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-gray-500">
                      {t.rich('form.privacy', {
                        link: (chunks) => (
                          <a href="/privacy" className="text-primary-600 hover:underline">
                            {chunks}
                          </a>
                        ),
                      })}
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('why.heading')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('why.subheading')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyIcons.map((ItemIcon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
              >
                <div className="inline-flex p-4 rounded-xl bg-primary-100 mb-4">
                  <ItemIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t(`why.items.${index}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`why.items.${index}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
