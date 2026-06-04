
import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";
import { getClientIp, rateLimit, tooManyRequests, cleanText } from "../../lib/ratelimit";

export const prerender = false;

export const GET: APIRoute = async () => {
    // Initialize Supabase only when request comes in, to avoid build-time errors
    const supabaseUrl = import.meta.env.SUPABASE_URL;
    const supabaseKey = import.meta.env.SUPABASE_ANON_KEY || import.meta.env.SUPABASE_KEY;

    if (!supabaseUrl || !supabaseKey) {
        return new Response(JSON.stringify({ error: "Missing Supabase credentials" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    try {
        // Fetch candles from the last 24 hours
        const { data, error } = await supabase
            .from("candles")
            .select("*")
            .gt('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())
            .order("created_at", { ascending: false });

        if (error) throw error;

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: (error as Error).message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
};

export const POST: APIRoute = async ({ request }) => {
    if (!rateLimit('candles:' + getClientIp(request), 5, 60000)) return tooManyRequests();

    const supabaseUrl = import.meta.env.SUPABASE_URL;
    const supabaseKey = import.meta.env.SUPABASE_ANON_KEY || import.meta.env.SUPABASE_KEY;

    if (!supabaseUrl || !supabaseKey) {
        return new Response(JSON.stringify({ error: "Missing Supabase credentials" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    try {
        const body = await request.json();
        const message = cleanText(body.message, 200);
        const pos = Number.isInteger(body.position) ? Math.min(49, Math.max(0, body.position)) : 0;

        if (!message) {
            return new Response(JSON.stringify({ error: "Message is required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Insert new candle
        const { data, error } = await supabase
            .from("candles")
            .insert([
                {
                    message: message, // Intention
                    position: pos, // Slot index (0-49)
                    created_at: new Date().toISOString()
                },
            ])
            .select();

        if (error) throw error;

        return new Response(JSON.stringify(data), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: (error as Error).message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
};
