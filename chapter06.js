
staticCache.addAll([
  //[code omitted for brevity]
    '/offline.html',
    '/fallback.svg'
  ]);
  
  const version = 'V0.05';
  
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
          // and put a copy in the cache
          const copy = responseFromFetch.clone();
          fetchEvent.waitUntil(
            caches.open(imageCacheName)
            .then( imageCache => {
              return imageCache.put(request, copy);
            }) // end open then
          ); // end waitUntil
          return responseFromFetch;
        }) // end fetch then
        .catch( error => {
          // otherwise show a fallback image.
          return caches.match('/fallback.svg');
        }); // end fetch catch + return
      }) // end match then
    ); // end respondWith
    return; // go no further
  } // end if
  
  const version = 'V0.05';
  const staticCacheName = version + 'staticfiles';
  const imageCacheName = 'images';
  const pagesCacheName = 'pages';
  
  const cacheList = [
    staticCacheName,
    imageCacheName,
    pagesCacheName
  ];
  
  // When the user requests an HTML file . . .
  if (request.headers.get('Accept').includes('text/html')) {
    fetchEvent.respondWith(
      // fetch that page from the network
      fetch(request)
      .then( responseFromFetch => {
        // and put a copy in the cache
        const copy = responseFromFetch.clone();
        fetchEvent.waitUntil(
          caches.open(pagesCacheName)
          .then( pagesCache => {
            return pagesCache.put(request, copy);
          }) // end open then
        ); // end waitUntil
        return responseFromFetch;
      }) // end fetch then
      .catch( error => {
        // otherwise look for a cached version of the page
        return caches.match(request)
        .then( responseFromCache => {
          if (responseFromCache) {
            return responseFromCache;
          } // end if
          // otherwise show the fallback page
          return caches.match('/offline.html');
        }); // end match then + return
      }) // end fetch catch
    ); // end respondWith
    return; // go no further
  } // end if
  
  if (request.url.includes('/articles/')) {
    // logic for article pages goes here.
    return;
  }
  
  if (/\/articles\/.+/.test(request.url)) {
    // now you’ve got two problems.
    return;
  }
  
  // When the requested page is an article . . .
  if (/\/articles\/.+/.test(request.url)) {
    fetchEvent.respondWith(
      // look in the cache
      caches.match(request)
      .then( responseFromCache => {
        if (responseFromCache) {
          // fetch a fresh version from the network
          fetchEvent.waitUntil(
            fetch(request)
            .then( responseFromFetch => {
              // and update the cache
              caches.open(pagesCacheName)
              .then( pagesCache => {
                return pagesCache.put(request, responseFromFetch);
              }) // end open then
            }) // end fetch then
          ); // end waitUntil
          return responseFromCache;
        } // end if
        // otherwise fetch the page from the network
        return fetch(request)
        .then( responseFromFetch => {
          // and put a copy in the cache
          const copy = responseFromFetch.clone();
          fetchEvent.waitUntil(
            caches.open(pagesCacheName)
            .then( pagesCache => {
              return pagesCache.put(request, copy);
            }) // end open then
          ); // end waitUntil
          return responseFromFetch;
        }) // end fetch then
        .catch( error => {
          // otherwise show the fallback page
          return caches.match('/offline.html');
        }); // end fetch catch + return
      }) // end match then
    ); // end respondWith
    return; // go no further
  } // end if
  
  if (responseFromCache) {
    // fetch a fresh version from the network
    fetchEvent.waitUntil(
      fetch(request)
      .then (responseFromFetch => {
        // and update the cache
        caches.open(imageCacheName)
        .then( imageCache => {
          return imageCache.put(request, responseFromFetch);
        }); // end open then
      }) // end fetch then
    ); // end waitUntil
    return responseFromCache;
  } // end if
  