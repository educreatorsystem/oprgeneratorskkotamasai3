/* SMART OPR — SK Kota Masai 3. App shell sahaja disimpan offline. */
const CACHE_NAME = 'opr-sk-kota-masai-3-v1-20261022';
const CACHE_PREFIX = 'opr-sk-kota-masai-3-';
const APP_SHELL = ['./', './index.html', './manifest.webmanifest', './smart-opr-header.png'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith(CACHE_PREFIX) && k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function isLiveData(url) {
  return ['script.google.com', 'script.googleusercontent.com', 'docs.google.com',
          'drive.google.com', 'lh3.googleusercontent.com'].includes(url.hostname);
}

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (isLiveData(url)) return;

  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(c => c.put('./index.html', clone)).catch(() => {});
        }
        return response;
      }).catch(() => caches.match('./index.html'))
    );
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, clone)).catch(() => {});
        }
        return response;
      }))
    );
    return;
  }

  // Ikon lencana, fon dan CDN luaran hanya cache selepas berjaya dimuatkan.
  event.respondWith(
    caches.match(req).then(hit => {
      const live = fetch(req).then(response => {
        if (response.ok || response.type === 'opaque') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, clone)).catch(() => {});
        }
        return response;
      }).catch(() => hit || Response.error());
      return hit || live;
    })
  );
});
