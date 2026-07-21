'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { CheckCircle2, ArrowRight, HelpCircle, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from '@/i18n/navigation';

// Copy lives in the message catalogs (pricingPage.plans.*).
const plans = [
  {
    id: 'starter',
    price: { monthly: 99, annual: 84 },
    popular: false,
    ctaLink: 'https://app.climatrix.co/register?plan=starter',
    ctaInternal: false,
  },
  {
    id: 'professional',
    price: { monthly: null, annual: 297 },
    popular: true,
    ctaLink: 'https://app.climatrix.co/register?plan=professional',
    ctaInternal: false,
  },
  {
    id: 'enterprise',
    price: { monthly: null, annual: null },
    popular: false,
    ctaLink: '/demo',
    ctaInternal: true,
  },
] as const;

type PlanFeature = { name: string; included: boolean };
type CompareRow = {
  feature: string;
  starter: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
};
type FaqItem = { question: string; answer: string };

export default function PricingClient() {
  const t = useTranslations('pricingPage');
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const compareRows = t.raw('compare.rows') as CompareRow[];
  const faqs = t.raw('faq.items') as FaqItem[];

  const bold = (chunks: React.ReactNode) => (
    <span className="font-semibold text-gray-700">{chunks}</span>
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

            {/* Billing toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-4 bg-gray-100 p-1.5 rounded-xl"
            >
              <button
                onClick={() => setAnnual(false)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  !annual
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t('monthly')}
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  annual
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t('annual')}
                <span className="ms-2 text-xs text-accent-600 font-semibold">{t('save')}</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-primary-600 to-secondary-600 text-white shadow-2xl scale-105 z-10'
                    : 'bg-white border border-gray-200 hover:border-primary-200 hover:shadow-lg'
                } transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    {t('mostPopular')}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {t(`plans.${plan.id}.name`)}
                  </h3>
                  <p className={`mt-2 text-sm ${plan.popular ? 'text-primary-100' : 'text-gray-600'}`}>
                    {t(`plans.${plan.id}.description`)}
                  </p>
                </div>

                <div className="mb-6">
                  {plan.price.monthly ? (
                    <>
                      <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                        ${annual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className={plan.popular ? 'text-primary-100' : 'text-gray-600'}>
                        {t('perMonth')}
                      </span>
                      {annual && (
                        <p className={`text-sm mt-1 ${plan.popular ? 'text-primary-200' : 'text-gray-500'}`}>
                          {t('billedAnnually')}
                        </p>
                      )}
                    </>
                  ) : plan.price.annual ? (
                    // Annual-only (Professional): the monthly toggle doesn't apply.
                    <>
                      <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                        ${plan.price.annual}
                      </span>
                      <span className={plan.popular ? 'text-primary-100' : 'text-gray-600'}>
                        {t('perMonth')}
                      </span>
                      <p className={`text-sm mt-1 ${plan.popular ? 'text-primary-200' : 'text-gray-500'}`}>
                        {t('billedAnnuallyLicense')}
                      </p>
                    </>
                  ) : (
                    <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {t('customPricing')}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {(t.raw(`plans.${plan.id}.features`) as PlanFeature[]).map((feature) => (
                    <li key={feature.name} className="flex items-start gap-3">
                      {feature.included ? (
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-accent-300' : 'text-accent-500'}`} />
                      ) : (
                        <X className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-primary-300' : 'text-gray-300'}`} />
                      )}
                      <span className={`text-sm ${
                        feature.included
                          ? plan.popular ? 'text-white' : 'text-gray-700'
                          : plan.popular ? 'text-primary-200' : 'text-gray-400'
                      }`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.ctaInternal ? (
                  <Link
                    href={plan.ctaLink}
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all ${
                      plan.popular
                        ? 'bg-white text-primary-600 hover:bg-gray-50'
                        : 'gradient-bg text-white hover:opacity-90'
                    }`}
                  >
                    {t(`plans.${plan.id}.cta`)}
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </Link>
                ) : (
                  <a
                    href={plan.ctaLink}
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all ${
                      plan.popular
                        ? 'bg-white text-primary-600 hover:bg-gray-50'
                        : 'gradient-bg text-white hover:opacity-90'
                    }`}
                  >
                    {t(`plans.${plan.id}.cta`)}
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            {t.rich('freeNote', { b: bold })}
          </p>

          {/* Report Pass — the once-a-year reporter's product */}
          <div className="mt-12 rounded-2xl border-2 border-primary-200 bg-primary-50/40 p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-2xl font-bold text-gray-900">{t('reportPass.title')}</h3>
                  <span className="rounded-full bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1">
                    {t('reportPass.oneTime')}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">
                  {t('reportPass.body')}
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                  {(t.raw('reportPass.items') as string[]).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-accent-500 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-end md:ps-6 md:border-s border-primary-200">
                <div className="text-4xl font-bold text-gray-900">{t('reportPass.price')}</div>
                <p className="text-sm text-gray-600 mb-3">{t('reportPass.per')}</p>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl gradient-bg px-6 py-3 font-semibold text-white transition-all hover:opacity-90"
                >
                  {t('reportPass.cta')}
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            {t.rich('capacityNote', { b: bold })}
          </p>

          {/* Add-on modules — product-level tools on top of Professional */}
          <div className="mt-12 rounded-2xl border-2 border-secondary-200 bg-secondary-50/40 p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-1">
                <h3 className="text-2xl font-bold text-gray-900">{t('addons.heading')}</h3>
                <span className="rounded-full bg-secondary-100 text-secondary-700 text-xs font-semibold px-3 py-1">
                  {t('addons.tag')}
                </span>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t('addons.body')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {(['pcf', 'lca', 'epd'] as const).map((mod) => (
                <div
                  key={mod}
                  className="rounded-xl bg-white border border-secondary-100 p-6"
                >
                  <h4 className="font-bold text-gray-900 mb-2">
                    {t(`addons.modules.${mod}.name`)}
                    <span className="ms-2 align-middle rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                      {t(`addons.modules.${mod}.badge`)}
                    </span>
                  </h4>
                  <p className="text-sm text-gray-600">{t(`addons.modules.${mod}.description`)}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                {t('addons.note')}
              </p>
              <a
                href="mailto:avi@climatrix.co?subject=Add-on%20modules%20(PCF%20%2F%20LCA%20%2F%20EPD)"
                className="inline-flex items-center justify-center gap-2 rounded-xl gradient-bg px-6 py-3 font-semibold text-white transition-all hover:opacity-90"
              >
                {t('addons.cta')}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('compare.heading')}
            </h2>
            <p className="text-gray-600">
              {t('compare.subheading')}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-start p-6 text-sm font-semibold text-gray-900">{t('compare.colFeature')}</th>
                  <th className="p-6 text-sm font-semibold text-gray-900 text-center">{t('compare.colStarter')}</th>
                  <th className="p-6 text-sm font-semibold text-primary-600 text-center bg-primary-50">{t('compare.colPro')}</th>
                  <th className="p-6 text-sm font-semibold text-gray-900 text-center">{t('compare.colEnterprise')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {compareRows.map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? 'bg-gray-50/50' : ''}>
                    <td className="p-6 text-sm text-gray-700">{row.feature}</td>
                    <td className="p-6 text-center">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <CheckCircle2 className="w-5 h-5 text-accent-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{row.starter}</span>
                      )}
                    </td>
                    <td className="p-6 text-center bg-primary-50/50">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? (
                          <CheckCircle2 className="w-5 h-5 text-accent-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-primary-600 font-medium">{row.pro}</span>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? (
                          <CheckCircle2 className="w-5 h-5 text-accent-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('faq.heading')}
            </h2>
            <p className="text-gray-600">
              {t('faq.subheading')}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-start hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <HelpCircle className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
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
              href="https://app.climatrix.co/register"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-600 shadow-lg hover:bg-gray-50 transition-all"
            >
              {t('cta.trial')}
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </a>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
            >
              {t('cta.contact')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
