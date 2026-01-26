
// Minimal Service Worker to satisfy PWA installation criteria
self.addEventListener('install', (e) => {
    // console.log('Oratorium Service Worker: Installed');
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    // console.log('Oratorium Service Worker: Active');
    return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    // Basic pass-through for now. 
    // We don't want aggressive caching breaking the dev cycle.
    e.respondWith(fetch(e.request));
});
