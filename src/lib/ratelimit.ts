// Lightweight in-memory, per-IP rate limiter + input helpers for API routes.
//
// NOTE: state lives per warm serverless instance, so it is best-effort (resets on
// cold start, not shared across instances). It stops casual abuse/bursts cheaply.
// The durable backstop is Supabase Row Level Security + (optionally) a shared
// store like Upstash. See the round-3 plan's "open items".

const buckets = new Map<string, { count: number; reset: number }>();

/** Best-effort client IP from proxy headers. */
export function getClientIp(request: Request): string {
    const xff = request.headers.get('x-forwarded-for');
    const ip = xff ? xff.split(',')[0]!.trim() : '';
    return ip || request.headers.get('x-real-ip') || 'unknown';
}

/** Returns true if the request is allowed; false if the limit is exceeded. */
export function rateLimit(key: string, max: number, windowMs: number): boolean {
    const now = Date.now();
    const b = buckets.get(key);
    if (!b || now > b.reset) {
        buckets.set(key, { count: 1, reset: now + windowMs });
        return true;
    }
    if (b.count >= max) return false;
    b.count++;
    return true;
}

/** Standard 429 response (the /lectio client already understands this). */
export function tooManyRequests(): Response {
    return new Response(JSON.stringify({ error: 'Too Many Requests' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json', 'Retry-After': '60' },
    });
}

/**
 * Normalize user-supplied text: must be a string, strip control characters,
 * trim, enforce a max length. Returns null if empty/invalid. Output is always
 * rendered as TEXT (never innerHTML) on the client, which is the real XSS guard.
 */
export function cleanText(input: unknown, maxLen: number): string | null {
    if (typeof input !== 'string') return null;
    // eslint-disable-next-line no-control-regex
    const cleaned = input.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '').trim();
    if (!cleaned) return null;
    return cleaned.slice(0, maxLen);
}
