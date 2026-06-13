const CACHE_NAME = 'dobbelstenen-app-cache-v2';
const ASSETS = [
  'dobbelstenen.html',
  'manifest.json',
  'icon.png'
];

// Sla de app-bestanden offline op bij installatie
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serveer de bestanden direct vanuit de cache wanneer offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
