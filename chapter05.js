const version = 'V0.04';
const staticCacheName = version + 'staticfiles';
addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open(staticCacheName)
    .then( staticCache => {
      // these files don’t block installation
      staticCache.addAll([
        '/path/to/font.woff',
        '/path/to/icon.svg'
      ]); // end addAll
      // these files must be cached for installation
      return staticCache.addAll([
        '/path/to/stylesheet.css',
        '/path/to/javascript.js',
        '/offline.html'
      ]); // end return addAll
    }) // end open then
  ); // end waitUntil
}); // end addEventListener

return fetch(request);

return fetch(request)
.catch( error => {
  // Serve up a fallback.
});

return fetch(request)
.catch( error => {
  return caches.match('/offline.html');
});

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
      return fetch(request)
      .catch( error => {
        // Show a fallback page instead
        return caches.match('/offline.html');
      }); // end fetch catch + return
    }) // end match then
  ); // end respondWith
}); // end addEventListener

if (request.headers.get('Accept').includes('text/html')) {
  // true!
} else {
  // false!
}

addEventListener('fetch', fetchEvent => {
  const request = fetchEvent.request;
  if (request.headers.get('Accept').includes('text/html')) {
    // HTML-handling logic goes here.
  } else if (request.headers.get('Accept').includes('image')) {
    // Image-handling logic goes here.
  } else {
    // Logic for everything else goes here.
  }
});

addEventListener('fetch', fetchEvent => {
  const request = fetchEvent.request;
  if (request.headers.get('Accept').includes('text/html')) {
    // HTML-handling logic goes here.
    return; // go no further
  }
  if (request.headers.get('Accept').includes('image')) {
    // Image-handling logic goes here.
    return; // go no further
  }
  // Logic for everything else goes here.
});

const version = 'V0.04';
const staticCacheName = version + 'staticfiles';
const imageCacheName = 'images';

const cacheList = [
  staticCacheName,
  imageCacheName
];

if (cacheName != staticCacheName) {
  return caches.delete(cacheName);
}

if (!cacheList.includes(cacheName)) {
  return caches.delete(cacheName);
}

addEventListener('activate', activateEvent => {
  activateEvent.waitUntil(
    caches.keys()
    .then( cacheNames => {
      return Promise.all(
        cacheNames.map( cacheName => {
          if (!cacheList.includes(cacheName)) {
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

// When the user requests an HTML file . . .
if (request.headers.get('Accept').includes('text/html')) {
  fetchEvent.respondWith(
    // fetch that page from the network
    fetch(request)
    .catch( error => {
      // otherwise show the fallback page.
      return caches.match('/offline.html');
    }) // end fetch catch
  ); // end respondWith
  return; // go no further
} // end if

// When the user requests an image . . .
if (request.headers.get('Accept').includes('image')) {
  fetchEvent.respondWith(
    // look for a cached copy of the image
    caches.match(request)
    .then( responseFromCache => {
      if (responseFromCache) {
        return responseFromCache;
      } // end if
      // otherwise fetch the image from the network
      return fetch(request)
      .then( responseFromFetch => {
        // and put a copy in the cache.
        const copy = responseFromFetch.clone();
        fetchEvent.waitUntil(
          caches.open(imageCacheName)
          .then( imageCache => {
            return imageCache.put(request, copy);
          }) // end open then
        ); // end waitUntil
        return responseFromFetch;
      }); // end fetch then + return
    }) // end match then
  ); // end respondWith
  return; // go no further
} // end if

// For everything else . . .
fetchEvent.respondWith(
  // look for a cached copy of the file
  caches.match(request)
  .then( responseFromCache => {
    if (responseFromCache) {
      return responseFromCache;
    } // end if
    // otherwise fetch from the network.
    return fetch(request);
  }); // end match then
); // end respondWith

addEventListener('fetch', fetchEvent => {
  const request = fetchEvent.request;
  // When the user requests an HTML file . . .
  if (request.headers.get('Accept').includes('text/html')) {
    fetchEvent.respondWith(
      // fetch that page from the network
      fetch(request)
      .catch( error => {
        // otherwise show the fallback page.
        return caches.match('/offline.html');
      }) // end fetch catch
    ); // end respondWith
    return; // go no further
  } // end if
  // When the user requests an image . . .
  if (request.headers.get('Accept').includes('image')) {
    fetchEvent.respondWith(
      // look for a cached version of the image
      caches.match(request)
      .then( responseFromCache => {
        if (responseFromCache) {
          return responseFromCache;
        } // end if
        // otherwise fetch the image from the network
        return fetch(request)
        .then( responseFromFetch => {
          // and put a copy in the cache.
          const copy = responseFromFetch.clone();
          fetchEvent.waitUntil(
            caches.open(imageCacheName)
            .then( imageCache => {
              return imageCache.put(request, copy);
            }) // end open then
          ); // end waitUntil
          return responseFromFetch;
        }); // end fetch then + return
      }) // end match then
    ); // end respondWith
    return; // go no further
  } // end if
  // For everything else . . .
  fetchEvent.respondWith(
    // look for a cached version of the file
    caches.match(request)
    .then( responseFromCache => {
      if (responseFromCache) {
        return responseFromCache;
      } // end if
      // otherwise fetch from the network.
      return fetch(request);
    }) // end match then
  ); // end respondWith
}); // end addEventListener
