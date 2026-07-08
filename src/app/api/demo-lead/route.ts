import { NextResponse } from 'next/server';

/**
 * Server-side proxy for Request Demo submissions → platform CRM.
 * Falls back to source 'manual' if the platform doesn't know 'website_demo'
 * yet (deploy-order safety) — a demo request must never be lost.
 */

const LEADS_URL =
  'https://app-climatrix-platform-production.up.railway.app/api/leads';

async function forward(payload: Record<string, unknown>) {
  return fetch(LEADS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const payload = {
      email: body.email,
      name: [body.firstName, body.lastName].filter(Boolean).join(' ') || undefined,
      organization_name: body.company || undefined,
      source: 'website_demo',
      what_tried: `demo-request${body.companySize ? ` · ${body.companySize}` : ''}${
        body.message ? ` · ${String(body.message).slice(0, 180)}` : ''
      }`,
    };
    let upstream = await forward(payload);
    if (upstream.status === 400) {
      upstream = await forward({ ...payload, source: 'manual' });
    }
    const data = await upstream.json().catch(() => ({}));
    return NextResponse.json(data, { status: upstream.status });
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
