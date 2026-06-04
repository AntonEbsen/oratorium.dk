import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import { getClientIp, rateLimit, tooManyRequests } from '../../../lib/ratelimit';

export const prerender = false;

const json = (b: unknown, s: number) =>
    new Response(JSON.stringify(b), { status: s, headers: { 'Content-Type': 'application/json' } });

// Store a Web Push subscription. Requires a Supabase `push_subscriptions` table
// (endpoint text unique, subscription jsonb) with an anon-insert/upsert RLS policy.
export const POST: APIRoute = async ({ request }) => {
    if (!rateLimit('push-sub:' + getClientIp(request), 10, 60000)) return tooManyRequests();

    const url = import.meta.env.SUPABASE_URL;
    const key = import.meta.env.SUPABASE_ANON_KEY || import.meta.env.SUPABASE_KEY;
    if (!url || !key) return json({ error: 'Konfigurationsfejl' }, 500);

    try {
        const sub = await request.json();
        if (!sub || typeof sub.endpoint !== 'string' || !sub.endpoint.startsWith('https://')) {
            return json({ error: 'Ugyldig subscription' }, 400);
        }
        const supabase = createClient(url, key);
        const { error } = await supabase
            .from('push_subscriptions')
            .upsert({ endpoint: sub.endpoint, subscription: sub }, { onConflict: 'endpoint' });
        if (error) return json({ error: 'Kunne ikke gemme tilmelding' }, 500);
        return json({ ok: true }, 200);
    } catch {
        return json({ error: 'Ugyldig forespørgsel' }, 400);
    }
};
