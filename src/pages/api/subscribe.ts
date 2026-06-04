import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import { getClientIp, rateLimit, tooManyRequests, cleanText } from '../../lib/ratelimit';

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body: unknown, status: number) =>
    new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

// Newsletter / formation signup. Requires a Supabase `subscribers` table
// (column: email text unique) with appropriate RLS allowing anon insert.
export const POST: APIRoute = async ({ request }) => {
    if (!rateLimit('subscribe:' + getClientIp(request), 3, 60000)) return tooManyRequests();

    const supabaseUrl = import.meta.env.SUPABASE_URL;
    const supabaseKey = import.meta.env.SUPABASE_ANON_KEY || import.meta.env.SUPABASE_KEY;
    if (!supabaseUrl || !supabaseKey) return json({ error: 'Konfigurationsfejl' }, 500);

    try {
        const body = await request.json();
        const email = (cleanText(body.email, 254) || '').toLowerCase();
        if (!EMAIL_RE.test(email)) return json({ error: 'Ugyldig e-mailadresse' }, 400);

        const supabase = createClient(supabaseUrl, supabaseKey);
        const { error } = await supabase.from('subscribers').insert([{ email }]);

        if (error) {
            // Unique-violation = already subscribed; treat as idempotent success.
            if ((error as any).code === '23505') return json({ ok: true, already: true }, 200);
            return json({ error: 'Kunne ikke tilmelde lige nu' }, 500);
        }
        return json({ ok: true }, 200);
    } catch {
        return json({ error: 'Ugyldig forespørgsel' }, 400);
    }
};
