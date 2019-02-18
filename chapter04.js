const staticCacheName = 'staticfiles';

addEventListener('install', installEvent => {
  // install-handling code goes here
});

addEventListener('fetch', fetchEvent => {
  // fetch-handling code goes here
});

addEventListener('install', installEvent => {
  installEvent.waitUntil(
    // Cache your files here
  ); // end waitUntil
}); // end addEventListener

caches.open(staticCacheName)
.then( cache => {
  // Success!
})
.catch( error => {
  // Failure!
});

addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open(staticCacheName)
    .then( staticCache => {
      // Cache your files here
    }) // end open then
  ); // end waitUntil
}); // end addEventListener

staticCache.addAll([
  '/path/to/stylesheet.css',
  '/path/to/javascript.js',
  '/path/to/font.woff',
  '/path/to/icon.svg'
]);

addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open(staticCacheName)
    .then( staticCache => {
      return staticCache.addAll([
        '/path/to/stylesheet.css',
        '/path/to/javascript.js',
        '/path/to/font.woff',
        '/path/to/icon.svg'
      ]); // end return addAll
    }) // end open then
  ); // end waitUntil
}); // end addEventListener

addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open(staticCacheName)
    .then( staticCache => {
      // nice to have
      staticCache.addAll([
        '/path/to/font.woff',
        '/path/to/icon.svg'
      ]); // end addAll
      // must have
      return staticCache.addAll([
        '/path/to/stylesheet.css',
        '/path/to/javascript.js'
      ]); // end return addAll
    }) // end open then
  ); // end waitUntil
}); // end addEventListener

addEventListener('fetch', fetchEvent => {
  const request = fetchEvent.request;
  fetchEvent.respondWith(
    // fetch-handling code goes here
  ); // end respondWith
}); // end addEventListener

caches.open(staticCacheName)
.then( staticCache => {
  return staticCache.match(request);
});

caches.match(request);

caches.match(request)
.then( responseFromCache => {
  // Success!
})
.catch( error => {
  // Failure!
});

addEventListener('fetch', fetchEvent => {
  const request = fetchEvent.request;
  fetchEvent.respondWith(
    caches.match(request)
    .then( responseFromCache => {
      if (responseFromCache) {
        return responseFromCache;
      } // end if
    }) // end match then
  ); // end respondWith
}); // end addEventListener

return fetch(request)
.then( responseFromFetch => {
  return responseFromFetch;
});

return fetch(request);

if (responseFromCache) {
  return responseFromCache;
} else {
  return fetch(request);
}

if (responseFromCache) {
  return responseFromCache;
}
return fetch(request);

return responseFromCache || fetch(request);

addEventListener('fetch', fetchEvent => {
  const request = fetchEvent.request;
  fetchEvent.respondWith(
    // First, look in the cache.
    caches.match(request)
    .then( responseFromCache => {
      if (responseFromCache) {
        return responseFromCache;
      } // end if
      // Otherwise fetch from the network.
      return fetch(request);
    }) // end match then
  ); // end respondWith
}); // end addEventListener

const staticCacheName = 'staticfiles';

const version = 'V0.01';

const version = 'V0.01';
const staticCacheName = version + 'staticfiles';

const version = 'V0.02';

return staticCache.addAll([
  '/path/to/stylesheet-v2.css',
  '/path/to/javascript-v3.js'
]);

addEventListener('install', installEvent => {
  installEvent.waitUntil(
    // Cache your files here
  ); // end waitUntil
}); // end addEventListener

addEventListener('install', installEvent => {
  skipWaiting();
  installEvent.waitUntil(
    // Cache your files here
  ); // end waitUntil
}); // end addEventListener

const version = 'V0.03';

const staticCacheName = version + 'staticfiles';

addEventListener('activate', activateEvent => {
  activateEvent.waitUntil(
    // Clean all the things!
  ); // end waitUntil
}); // end addEventListener

caches.keys()
.then( cacheNames => {
  // loop through the cacheNames array
})

caches.keys()
.then( cacheNames => {
  return Promise.all(
    // asynchronous code goes here
  );
})

cacheNames.map( cacheName => {
  if (cacheName != staticCacheName) {
    // this cacheName needs to go!
  }
});

if (cacheName != staticCacheName) {
  return caches.delete(cacheName);
}

addEventListener('activate', activateEvent => {
  activateEvent.waitUntil(
    caches.keys()
    .then( cacheNames => {
      return Promise.all(
        cacheNames.map( cacheName => {
          if (cacheName != staticCacheName) {
            return caches.delete(cacheName);
          } // end if
        }) // end map
      ); // end return Promise.all
    }) // end keys then
    .then( () => {
      return clients.claim();
    }) // end then
  ); // end waitUntil
}); // end addEventListener


addEventListener('install', installEvent => {
  // Cache some files.
});
addEventListener('activate', activateEvent => {
  // Clean up old caches.
});
