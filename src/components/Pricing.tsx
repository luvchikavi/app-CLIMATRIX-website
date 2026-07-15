'use client';

/**
 * Pricing — four tiers, with the 14-day free trial gated behind a details form:
 * the visitor leaves name/email/org (captured as a lead in the platform CRM)
 * and only then continues to signup. Enterprise routes to the demo/quote form.
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const APP_URL = 'https://app.climatrix.co';
// Same-origin proxy (src/app/api/trial-lead) — avoids cross-origin CORS entirely.
const LEADS_ENDPOINT = '/api/trial-lead';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    cadence: '',
    blurb: 'Explore your footprint — one site, no card, no clock.',
    features: [
      '1 site, 1 user',
      'Scope 1 & 2 tracking',
      'Data Hub with guided setup',
      'On-screen preview reports',
      'Free CBAM exemption checker',
    ],
    highlighted: false,
  },
  {
    name: 'Starter',
    price: '$99',
    cadence: '/mo',
    blurb: 'Get a defensible Scope 1 & 2 inventory across your sites.',
    features: [
      'Up to 5 sites, 3 users',
      'Everything in Free',
      'Template & spreadsheet import',
      'Report exports (CSV / JSON)',
      'Email support',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$349',
    cadence: '/mo',
    blurb: 'Full value-chain accounting with the AI Smart Import.',
    features: [
      'Up to 25 sites, 10 users',
      'Everything in Starter',
      'All 15 Scope 3 categories',
      'AI Smart Import — any file, any layout',
      'Full exports: ISO 14064-1 · CDP · ESRS · PDF',
      'CBAM (Beta) + Decarbonization (Beta)',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    cadence: '',
    blurb: 'Consultants and groups managing many client inventories.',
    features: [
      'Unlimited sites, users & imports',
      'Custom emission factors',
      'SSO & advanced security',
      'Dedicated onboarding & support',
      'Audit support + advisory',
    ],
    highlighted: false,
    enterprise: true,
  },
];

export default function Pricing() {
  const [trialTier, setTrialTier] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [busy, setBusy] = useState(false);

  const startTrial = async () => {
    if (!email.includes('@')) return;
    setBusy(true);
    try {
      await fetch(LEADS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim() || undefined,
          organization_name: org.trim() || undefined,
          source: 'website_trial',
          what_tried: `trial:${trialTier}`,
        }),
      });
    } catch {
      // capture must never block the trial
    }
    window.location.href = `${APP_URL}/signup`;
  };

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple <span className="gradient-text">pricing</span>, serious accounting
          </h2>
          <p className="text-xl text-gray-600">
            Every plan starts with a 14-day free trial. No credit card required.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                tier.highlighted
                  ? 'border-emerald-500 bg-white shadow-2xl scale-[1.03]'
                  : 'border-gray-200 bg-white/70'
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full animated-gradient px-4 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
              <p className="mt-2">
                <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                <span className="text-gray-500">{tier.cadence}</span>
              </p>
              <p className="mt-2 text-sm text-gray-600">{tier.blurb}</p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>
              {tier.enterprise ? (
                <a
                  href="/demo"
                  className="mt-8 rounded-xl border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-900 hover:border-emerald-500"
                >
                  Talk to us for a quote
                </a>
              ) : (
                <button
                  onClick={() => setTrialTier(tier.name)}
                  className={`mt-8 rounded-xl px-4 py-3 text-sm font-semibold ${
                    tier.highlighted
                      ? 'animated-gradient text-white shine-effect'
                      : 'border border-gray-300 text-gray-900 hover:border-emerald-500'
                  }`}
                >
                  {tier.name === 'Free' ? 'Start free' : 'Try it free for 14 days'}
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trial gate — details first, then on to signup */}
      {trialTier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"
            onClick={() => setTrialTier(null)}
          />
          <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
            <button
              onClick={() => setTrialTier(null)}
              className="absolute right-4 top-4 rounded-lg p-1 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-xl font-bold text-gray-900">
              {trialTier === 'Free'
                ? 'Create your free account'
                : `Start your 14-day ${trialTier} trial`}
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Tell us who you are and we’ll take you straight to your account.
            </p>
            <div className="mt-5 space-y-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email (required)"
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm"
              />
              <input
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && startTrial()}
                placeholder="Organization"
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm"
              />
              <button
                onClick={startTrial}
                disabled={busy || !email.includes('@')}
                className="w-full rounded-xl animated-gradient px-4 py-3 text-sm font-semibold text-white disabled:opacity-50"
              >
                {busy ? 'One moment…' : 'Start my free trial'}
              </button>
              <p className="text-center text-xs text-gray-500">
                No credit card required. We’ll only use this to set up your trial.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
