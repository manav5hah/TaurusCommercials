const CACHE_NAME = 'steel-website-v1';
const STATIC_CACHE_NAME = 'steel-website-static-v1';
const DYNAMIC_CACHE_NAME = 'steel-website-dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/favicon.png'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(STATIC_ASSETS);
      })
  );
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Take control of all clients immediately
  event.waitUntil(self.clients.claim());
});

// Listen for messages from the main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle static assets (JS, CSS, images)
  if (url.pathname.startsWith('/static/') || 
      url.pathname.includes('.js') || 
      url.pathname.includes('.css') || 
      url.pathname.includes('.png') || 
      url.pathname.includes('.jpg') || 
      url.pathname.includes('.jpeg') || 
      url.pathname.includes('.svg') ||
      url.pathname.includes('.ico')) {
    
    event.respondWith(
      caches.match(request)
        .then((response) => {
          // Return cached version if available
          if (response) {
            return response;
          }

          // Clone the request
          const fetchRequest = request.clone();

          return fetch(fetchRequest).then((response) => {
            // Check if valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Cache the response
            caches.open(STATIC_CACHE_NAME)
              .then((cache) => {
                cache.put(request, responseToCache);
              });

            return response;
          });
        })
    );
  } else {
    // For HTML pages, try network first, then cache
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone the response
          const responseToCache = response.clone();

          // Cache the response
          caches.open(DYNAMIC_CACHE_NAME)
            .then((cache) => {
              cache.put(request, responseToCache);
            });

          return response;
        })
        .catch(() => {
          // If network fails, try to serve from cache
          return caches.match(request);
        })
    );
  }
}); 