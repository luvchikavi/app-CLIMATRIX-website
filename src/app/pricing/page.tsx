'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, HelpCircle, X } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses starting their sustainability journey',
    price: { monthly: 99, annual: 84 },
    popular: false,
    features: [
      { name: '2 users', included: true },
      { name: '2 sites', included: true },
      { name: 'Scope 1 & 2 tracking', included: true },
      { name: 'Report exports (CSV / JSON)', included: true },
      { name: 'Email support', included: true },
      { name: 'Scope 3 tracking', included: false },
      { name: 'AI Smart Import', included: false },
      { name: 'CBAM compliance', included: false },
      { name: 'API access', included: false },
    ],
    cta: 'Start Free Trial',
    ctaLink: 'https://app.climatrix.co/register?plan=starter',
  },
  {
    name: 'Professional',
    description: 'For growing companies with comprehensive carbon management needs',
    price: { monthly: null, annual: 297 },
    popular: true,
    features: [
      { name: '2 users included — add seats anytime', included: true },
      { name: '5 sites included — add site packs anytime', included: true },
      { name: 'Scope 1, 2 & 3 — all 15 categories', included: true },
      { name: 'AI Smart Import — any file, any layout', included: true },
      { name: 'Full exports: ISO 14064-1 · CDP · ESRS · PDF', included: true },
      { name: 'CBAM compliance (Beta)', included: true },
      { name: 'Decarbonization & scenario planning (Beta)', included: true },
      { name: 'Priority support', included: true },
      { name: 'API access', included: false },
    ],
    cta: 'Start Free Trial',
    ctaLink: 'https://app.climatrix.co/register?plan=professional',
  },
  {
    name: 'Enterprise',
    description: 'Full-featured solution for large organizations with complex needs',
    price: { monthly: null, annual: null },
    popular: false,
    features: [
      { name: 'Unlimited users & sites', included: true },
      { name: 'All emission scopes', included: true },
      { name: 'Custom reporting', included: true },
      { name: 'Unlimited AI Smart Import', included: true },
      { name: 'Dedicated support', included: true },
      { name: 'CBAM compliance (Beta)', included: true },
      { name: 'Scenario planning (Beta)', included: true },
      { name: 'PCAF · LCA · EPD as they ship', included: true },
      { name: 'Full API access', included: true },
      { name: 'SSO & SAML', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'Audit support + advisory', included: true },
    ],
    cta: 'Contact Sales',
    ctaLink: '/demo',
  },
];

const faqs = [
  {
    question: 'How does the 14-day free trial work?',
    answer: 'For 14 days you run the full parser and calculation engine on your own data — no credit card required. Report exports and some advanced views unlock when you subscribe. At the end of the trial your account is paused, but your data is preserved.',
  },
  {
    question: 'Which modules are included?',
    answer: 'Every plan includes the full corporate carbon footprint (CCF). CBAM ships in Beta on Professional, and the verifier portal is included wherever report exports are. The product-level tools — PCF, LCA-lite and EPD preparation — are add-on modules on top of Professional.',
  },
  {
    question: 'How do the add-on modules (PCF, LCA-lite, EPD) work?',
    answer: 'They sit on top of a Professional subscription and are priced by what you actually declare: PCF and LCA-lite per product, EPD preparation per declaration. All three are in Beta today. LCA-lite is screening-grade — a fast, transparent first pass, not a critical-review LCA — and for EPDs we prepare a verification-ready declaration package that your program operator reviews and publishes; we don\'t issue EPDs ourselves. Email avi@climatrix.co for a quote.',
  },
  {
    question: 'Can I switch plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you\'ll get immediate access to new features. When downgrading, changes take effect at the next billing cycle.',
  },
  {
    question: 'We only report once a year — do we need a subscription?',
    answer: 'No. The Report Pass is built for exactly that: a one-time $1,790 purchase that opens everything in Professional for 90 days, licensed to the reporting year you\'re working on. Your data and audit trail stay afterwards, and auditors can be given access again with a new pass or a subscription.',
  },
  {
    question: 'What if we outgrow the included sites or seats?',
    answer: 'Professional includes 5 sites and 2 users. Add capacity anytime without changing plans: site packs add 5 sites for $490/year, and extra seats are $190/year each.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express) and bank transfers for annual enterprise contracts.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes. All data is encrypted at rest and in transit, every organization\'s data is strictly isolated, and the platform keeps a comprehensive audit trail of who changed what.',
  },
  {
    question: 'Do you offer discounts for non-profits?',
    answer: 'Yes, we offer special pricing for non-profit organizations, educational institutions, and startups. Contact us to learn more.',
  },
  {
    question: 'What support do you provide?',
    answer: 'All plans include email support. Professional plans include priority support with faster response times. Enterprise plans include dedicated account management and phone support.',
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              Simple, Transparent
              <span className="block gradient-text">Pricing</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 mb-8"
            >
              Start with a 14-day free trial. No credit card required.
              Choose the plan that fits your needs.
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
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  annual
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Annual
                <span className="ml-2 text-xs text-accent-600 font-semibold">Save 15%</span>
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
                key={plan.name}
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
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`mt-2 text-sm ${plan.popular ? 'text-primary-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  {plan.price.monthly ? (
                    <>
                      <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                        ${annual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className={plan.popular ? 'text-primary-100' : 'text-gray-600'}>
                        /month
                      </span>
                      {annual && (
                        <p className={`text-sm mt-1 ${plan.popular ? 'text-primary-200' : 'text-gray-500'}`}>
                          Billed annually
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
                        /month
                      </span>
                      <p className={`text-sm mt-1 ${plan.popular ? 'text-primary-200' : 'text-gray-500'}`}>
                        Billed annually · annual license
                      </p>
                    </>
                  ) : (
                    <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      Custom Pricing
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
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

                <a
                  href={plan.ctaLink}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all ${
                    plan.popular
                      ? 'bg-white text-primary-600 hover:bg-gray-50'
                      : 'gradient-bg text-white hover:opacity-90'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Just exploring? The <span className="font-semibold text-gray-700">Free plan</span> —
            1 user, 1 site, on-screen preview reports and the CBAM exemption checker — is yours
            at signup. No card, no clock.
          </p>

          {/* Report Pass — the once-a-year reporter's product */}
          <div className="mt-12 rounded-2xl border-2 border-primary-200 bg-primary-50/40 p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-2xl font-bold text-gray-900">Report Pass</h3>
                  <span className="rounded-full bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1">
                    One-time
                  </span>
                </div>
                <p className="text-gray-600 mb-3">
                  Only report once a year? Skip the subscription. Everything in Professional for
                  90 days, licensed to one reporting year — and your data stays afterwards.
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                  {[
                    'All exports for that year — ISO 14064-1, CDP, ESRS, PDF',
                    'Full AI Smart Import, Scope 1–3',
                    'CBAM & decarbonization tools',
                    'Data & audit trail preserved after the window',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-accent-500 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-right md:pl-6 md:border-l border-primary-200">
                <div className="text-4xl font-bold text-gray-900">$1,790</div>
                <p className="text-sm text-gray-600 mb-3">per reporting year</p>
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl gradient-bg px-6 py-3 font-semibold text-white transition-all hover:opacity-90"
                >
                  Get a Report Pass
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            Need more room on Professional?{' '}
            <span className="font-semibold text-gray-700">Site packs (+5 sites) $490/yr</span> ·{' '}
            <span className="font-semibold text-gray-700">Extra seats $190/yr</span>.
          </p>

          {/* Add-on modules — product-level tools on top of Professional */}
          <div className="mt-12 rounded-2xl border-2 border-secondary-200 bg-secondary-50/40 p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-1">
                <h3 className="text-2xl font-bold text-gray-900">Add-on modules</h3>
                <span className="rounded-full bg-secondary-100 text-secondary-700 text-xs font-semibold px-3 py-1">
                  On top of Professional
                </span>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The product-level tools — from product footprint to a publish-ready declaration —
                are add-on modules on your Professional subscription, priced per product and per EPD.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  name: 'Product Carbon Footprint (PCF)',
                  badge: 'Beta',
                  description:
                    'ISO 14067 cradle-to-gate footprints with BOM modeling and PACT v3 exchange — priced per product.',
                },
                {
                  name: 'LCA-lite',
                  badge: 'Beta',
                  description:
                    'Screening-grade life-cycle assessment on your PCF models — 16 EF 3.1 impact categories across the EN 15804 modules. Priced per product.',
                },
                {
                  name: 'EPD Preparation',
                  badge: 'Beta',
                  description:
                    'Verification-ready ISO 14025 / EN 15804+A2 declaration preparation, published by your program operator — priced per EPD.',
                },
              ].map((mod) => (
                <div
                  key={mod.name}
                  className="rounded-xl bg-white border border-secondary-100 p-6"
                >
                  <h4 className="font-bold text-gray-900 mb-2">
                    {mod.name}
                    <span className="ml-2 align-middle rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                      {mod.badge}
                    </span>
                  </h4>
                  <p className="text-sm text-gray-600">{mod.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Pricing depends on how many products and declarations you need — tell us what
                you make and we&apos;ll quote it straight.
              </p>
              <a
                href="mailto:avi@climatrix.co?subject=Add-on%20modules%20(PCF%20%2F%20LCA%20%2F%20EPD)"
                className="inline-flex items-center justify-center gap-2 rounded-xl gradient-bg px-6 py-3 font-semibold text-white transition-all hover:opacity-90"
              >
                Talk to us
                <ArrowRight className="w-4 h-4" />
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
              Compare Plans
            </h2>
            <p className="text-gray-600">
              Detailed feature comparison across all plans
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-6 text-sm font-semibold text-gray-900">Feature</th>
                  <th className="p-6 text-sm font-semibold text-gray-900 text-center">Starter</th>
                  <th className="p-6 text-sm font-semibold text-primary-600 text-center bg-primary-50">Professional</th>
                  <th className="p-6 text-sm font-semibold text-gray-900 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { feature: 'Users', starter: '2', pro: '2 incl. (+seats)', enterprise: 'Unlimited' },
                  { feature: 'Sites', starter: '2', pro: '5 incl. (+packs)', enterprise: 'Unlimited' },
                  { feature: 'Scope 1 & 2', starter: true, pro: true, enterprise: true },
                  { feature: 'Scope 3 (All 15 categories)', starter: false, pro: true, enterprise: true },
                  { feature: 'AI Smart Import', starter: false, pro: '100 files/mo', enterprise: 'Unlimited' },
                  { feature: 'Full exports (ISO 14064-1 · CDP · ESRS · PDF)', starter: false, pro: true, enterprise: true },
                  { feature: 'CBAM Compliance (Beta)', starter: false, pro: true, enterprise: true },
                  { feature: 'Scenario Planning (Beta)', starter: false, pro: true, enterprise: true },
                  { feature: 'API Access', starter: false, pro: false, enterprise: true },
                  { feature: 'SSO / SAML', starter: false, pro: false, enterprise: true },
                  { feature: 'Custom Integrations', starter: false, pro: false, enterprise: true },
                  { feature: 'Support', starter: 'Email', pro: 'Priority', enterprise: 'Dedicated' },
                ].map((row, index) => (
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
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Have questions? We have answers.
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
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
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
            Still Have Questions?
          </h2>
          <p className="text-lg text-primary-100 mb-10">
            Our team is here to help you find the perfect plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.climatrix.co/register"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-600 shadow-lg hover:bg-gray-50 transition-all"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
