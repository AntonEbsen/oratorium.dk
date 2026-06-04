import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import webpush from 'web-push';

export const prerender = false;

// Triggered by Vercel Cron (see vercel.json). Sends the Angelus reminder to all
// push subscribers. Secured via CRON_SECRET (Vercel sends it as a Bearer token).
export const GET: APIRoute = async ({ request }) => {
    const secret = import.meta.env.CRON_SECRET;
    if (secret && request.headers.get('authorization') !== `Bearer ${secret}`) {
        return new Response('Unauthorized', { status: 401 });
    }

    const url = import.meta.env.SUPABASE_URL;
    const key = import.meta.env.SUPABASE_ANON_KEY || import.meta.env.SUPABASE_KEY;
    const vapidPublic = import.meta.env.VAPID_PUBLIC_KEY;
    const vapidPrivate = import.meta.env.VAPID_PRIVATE_KEY;
    if (!url || !key || !vapidPublic || !vapidPrivate) {
        return new Response(JSON.stringify({ error: 'Missing config' }), { status: 500 });
    }

    webpush.setVapidDetails(
        import.meta.env.VAPID_SUBJECT || 'mailto:anton.ebsen@proton.me',
        vapidPublic,
        vapidPrivate
    );

    const supabase = createClient(url, key);
    const { data: subs, error } = await supabase.from('push_subscriptions').select('*');
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });

    const morning = new Date().getUTCHours() < 14; // ~12:00 vs ~18:00 Copenhagen
    const payload = JSON.stringify({
        title: 'Angelus',
        body: morning
            ? 'Herrens engel bragte Maria bud — det er tid til middagsbøn.'
            : 'Herrens engel bragte Maria bud — det er tid til aftenbøn.',
        url: '/prayers',
        tag: 'oratorium-angelus',
    });

    let sent = 0;
    let removed = 0;
    await Promise.all(
        (subs || []).map(async (row: any) => {
            try {
                await webpush.sendNotification(row.subscription, payload);
                sent++;
            } catch (e: any) {
                if (e && (e.statusCode === 404 || e.statusCode === 410)) {
                    await supabase.from('push_subscriptions').delete().eq('endpoint', row.endpoint);
                    removed++;
                }
            }
        })
    );

    return new Response(JSON.stringify({ ok: true, sent, removed }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
};
