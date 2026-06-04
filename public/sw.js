// Oratorium service worker — offline-first.
// Strategy: navigations are network-first (fresh when online) with a cache +
// /offline fallback; same-origin assets (CSS/JS/fonts/images) are cache-first
// so visited pages keep working without a connection.
const CACHE = 'oratorium-v2';
const CORE = ['/', '/offline', '/prayers', '/rosary', '/seek', '/speculum'];

self.addEventListener('install', (event) => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE);
            // Resilient: don't let one missing URL abort the whole precache.
            await Promise.allSettled(CORE.map((url) => cache.add(url)));
            await self.skipWaiting();
        })()
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        (async () => {
            const keys = await caches.keys();
            await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
            await self.clients.claim();
        })()
    );
});

self.addEventListener('fetch', (event) => {
    const { request } = event;
    if (request.method !== 'GET') return;

    const url = new URL(request.url);
    if (url.origin !== self.location.origin) return; // let cross-origin (tiles, CDNs) pass through

    // HTML navigations: network-first, fall back to cache, then offline page.
    if (request.mode === 'navigate') {
        event.respondWith(
            (async () => {
                try {
                    const fresh = await fetch(request);
                    const cache = await caches.open(CACHE);
                    cache.put(request, fresh.clone());
                    return fresh;
                } catch {
                    const cached = await caches.match(request);
                    return cached || (await caches.match('/offline')) || Response.error();
                }
            })()
        );
        return;
    }

    // Static assets: cache-first, then network (and cache for next time).
    event.respondWith(
        (async () => {
            const cached = await caches.match(request);
            if (cached) return cached;
            try {
                const fresh = await fetch(request);
                if (fresh && fresh.status === 200 && fresh.type === 'basic') {
                    const cache = await caches.open(CACHE);
                    cache.put(request, fresh.clone());
                }
                return fresh;
            } catch {
                return cached || Response.error();
            }
        })()
    );
});
