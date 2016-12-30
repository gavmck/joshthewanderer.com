self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('cache-v-0.0.2').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles/main.css',
        '/scripts/main.js',
        '/fonts/JosefinSans-Regular.woff',
      ])
      .then(() => {
        self.skipWaiting();
      });
    }),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
