import { NextResponse } from 'next/server';

/**
 * Server-side proxy for the trial-gate lead capture. The browser posts
 * same-origin to the website; we forward to the platform CRM on Railway —
 * no CORS dependency, and the platform URL stays out of client bundles.
 */

const LEADS_URL =
  'https://app-climatrix-platform-production.up.railway.app/api/leads';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const upstream = await fetch(LEADS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await upstream.json().catch(() => ({}));
    return NextResponse.json(data, { status: upstream.status });
  } catch {
    // The lead capture must never block the visitor's path to the trial.
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
