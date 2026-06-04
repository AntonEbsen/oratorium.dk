
import { createClient } from '@supabase/supabase-js';
import type { APIRoute } from 'astro';
import { getClientIp, rateLimit, tooManyRequests, cleanText } from '../../lib/ratelimit';

export const prerender = false;

// GET: Fetch recent prayers
export const GET: APIRoute = async ({ request }) => {
    const supabaseUrl = import.meta.env.SUPABASE_URL;
    const supabaseKey = import.meta.env.SUPABASE_ANON_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
        .from('prayers')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);

    if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
};

// POST: Add new prayer
export const POST: APIRoute = async ({ request }) => {
    if (!rateLimit('prayers:' + getClientIp(request), 5, 60000)) return tooManyRequests();

    const supabaseUrl = import.meta.env.SUPABASE_URL;
    const supabaseKey = import.meta.env.SUPABASE_ANON_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    try {
        const body = await request.json();

        const content = cleanText(body.content, 500);
        const author = cleanText(body.author, 60) || 'Anonym';
        if (!content) {
            return new Response(JSON.stringify({ error: "Invalid content" }), { status: 400 });
        }

        const { data, error } = await supabase
            .from('prayers')
            .insert([{
                content: content,
                author: author
            }])
            .select();

        if (error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        }

        return new Response(JSON.stringify(data), { status: 200 });

    } catch (e) {
        return new Response(JSON.stringify({ error: "Invalid Request" }), { status: 400 });
    }
};
