'use client';

/**
 * Pricing — four tiers, with the 14-day free trial gated behind a details form:
 * the visitor leaves name/email/org (captured as a lead in the platform CRM)
 * and only then continues to signup. Enterprise routes to the demo/quote form.
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Check, X } from 'lucide-react';
import { Link } from '@/i18n/navigation';

const APP_URL = 'https://app.climatrix.co';
// Same-origin proxy (src/app/api/trial-lead) — avoids cross-origin CORS entirely.
const LEADS_ENDPOINT = '/api/trial-lead';

// Copy lives in the message catalogs (pricingSection.tiers.*); crmName keeps
// the lead-capture payload locale-independent.
const tiers = [
  { id: 'free', crmName: 'Free', hasCadence: false, highlighted: false, enterprise: false },
  { id: 'starter', crmName: 'Starter', hasCadence: true, highlighted: false, enterprise: false },
  { id: 'professional', crmName: 'Professional', hasCadence: true, highlighted: true, enterprise: false },
  { id: 'enterprise', crmName: 'Enterprise', hasCadence: false, highlighted: false, enterprise: true },
] as const;

type TierId = (typeof tiers)[number]['id'];

export default function Pricing() {
  const t = useTranslations('pricingSection');
  const [trialTier, setTrialTier] = useState<TierId | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [busy, setBusy] = useState(false);

  const startTrial = async () => {
    if (!email.includes('@')) return;
    setBusy(true);
    const crmName = tiers.find((tier) => tier.id === trialTier)?.crmName ?? trialTier;
    try {
      await fetch(LEADS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim() || undefined,
          organization_name: org.trim() || undefined,
          source: 'website_trial',
          what_tried: `trial:${crmName}`,
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
            {t.rich('heading', {
              gradient: (chunks) => <span className="gradient-text">{chunks}</span>,
            })}
          </h2>
          <p className="text-xl text-gray-600">
            {t('subheading')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                tier.highlighted
                  ? 'border-primary-500 bg-white shadow-2xl scale-[1.03]'
                  : 'border-gray-200 bg-white/70'
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full animated-gradient px-4 py-1 text-xs font-semibold text-white">
                  {t('mostPopular')}
                </span>
              )}
              <h3 className="text-lg font-semibold text-gray-900">{t(`tiers.${tier.id}.name`)}</h3>
              <p className="mt-2">
                <span className="text-4xl font-bold text-gray-900">{t(`tiers.${tier.id}.price`)}</span>
                {tier.hasCadence && (
                  <span className="text-gray-500">{t(`tiers.${tier.id}.cadence`)}</span>
                )}
              </p>
              <p className="mt-2 text-sm text-gray-600">{t(`tiers.${tier.id}.blurb`)}</p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {(t.raw(`tiers.${tier.id}.features`) as string[]).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
                    {f}
                  </li>
                ))}
              </ul>
              {tier.enterprise ? (
                <Link
                  href="/demo"
                  className="mt-8 rounded-xl border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-900 hover:border-primary-500"
                >
                  {t('enterpriseCta')}
                </Link>
              ) : (
                <button
                  onClick={() => setTrialTier(tier.id)}
                  className={`mt-8 rounded-xl px-4 py-3 text-sm font-semibold ${
                    tier.highlighted
                      ? 'animated-gradient text-white shine-effect'
                      : 'border border-gray-300 text-gray-900 hover:border-primary-500'
                  }`}
                >
                  {tier.id === 'free' ? t('startFree') : t('tryFree')}
                </button>
              )}
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-600">
          {t.rich('reportPassNote', {
            b: (chunks) => <span className="font-semibold text-gray-900">{chunks}</span>,
            link: (chunks) => (
              <Link href="/pricing" className="font-semibold text-primary-600 hover:text-primary-700">
                {chunks}
              </Link>
            ),
          })}
        </p>
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
              className="absolute end-4 top-4 rounded-lg p-1 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-xl font-bold text-gray-900">
              {trialTier === 'free'
                ? t('modalTitleFree')
                : t('modalTitleTrial', { tier: t(`tiers.${trialTier}.name`) })}
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              {t('modalSubtitle')}
            </p>
            <div className="mt-5 space-y-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('namePlaceholder')}
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('emailPlaceholder')}
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm"
              />
              <input
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && startTrial()}
                placeholder={t('orgPlaceholder')}
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm"
              />
              <button
                onClick={startTrial}
                disabled={busy || !email.includes('@')}
                className="w-full rounded-xl animated-gradient px-4 py-3 text-sm font-semibold text-white disabled:opacity-50"
              >
                {busy ? t('busy') : t('submit')}
              </button>
              <p className="text-center text-xs text-gray-500">
                {t('disclaimer')}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
