const FILES_TO_CACHE = [
  '/index.html',
  '/style.css',
  '/db.js',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];



const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

self.addEventListener('install', (event) => {
  event.waitUntil(
      evt.waitUntil(
      caches.open(DATA_CACHE_NAME).then((cache) => cache.add("/api/images"))
    )
      .then((cache) => cache.addAll(FILES_TO_CACHE))
      .then(self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches
      .keys()
      .then((keyList) => {
        return Promise.all( keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("deleting", key);
            return caches.delete(key);
          }
        }))
      }))
      self.clients.claim()
});


self.addEventListener("fetch", function(evt) {
  if (evt.request.url.startsWith(self.location.origin)) {
    evt.respondWith(
      caches.match(evt.request).then((cachedResponse)  => {
        if (cachedResponse) {
        return cachedResponse
      }
        return caches.open(RUNTIME).then((cache) => {
          return fetch(event.request).then((response) => {
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            })
          })
        })
      })
    )
  }
})
