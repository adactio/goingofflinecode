function trimCache(cacheName, maxItems) {
  caches.open(cacheName)
  .then( cache => {
    cache.keys()
    .then(items => {
      if (items.length > maxItems) {
        cache.delete(items[0])
        .then(
          trimCache(cacheName, maxItems)
        ); // end delete then
      } // end if
    }); // end keys then
  }); // end open then
} // end function

addEventListener('message', messageEvent => {
  // do something with messageEvent
});

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/serviceworker.js');
  if (navigator.serviceWorker.controller) {
    // A service worker is up and running!
  }
}

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/serviceworker.js');
  if (navigator.serviceWorker.controller) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.controller.postMessage('clean up caches');
    });
  }
}

addEventListener('message', messageEvent => {
  console.log(messageEvent.data);
});

addEventListener('message', messageEvent => {
  if (messageEvent.data == 'clean up caches') {
    trimCache(pagesCacheName, 20);
    trimCache(imageCacheName, 50);
  }
});

function stashInCache(request, cacheName) {
  // fetch the file
  fetch(request)
  .then( responseFromFetch => {
    // open the cache
    caches.open(cacheName)
    .then( theCache => {
      // put the file into the cache
      return theCache.put(request, responseFromFetch);
    }); // end open then
  }); // end fetch then
} // end function

async function stashInCache(request, cacheName) {
  // fetch the file
  const responseFromFetch = await fetch(request);
  // open the cache
  const theCache = await caches.open(cacheName);
  // put the file into the cache
  return await theCache.put(request, responseFromFetch);
}

fetchEvent.respondWith(
  fetch(request)
); // end respondWith

fetchEvent.respondWith(
  async function() {
    return await fetch(request);
  }() // end async function
); // end respondWith

fetchEvent.respondWith(
  // try fetching the file from the network
  fetch(request)
  .catch( error => {
    // otherwise look for a cached version of the file
    return caches.match(request)
  }) // end fetch catch
); // end respondWith

fetchEvent.respondWith(
  async function() {
    try {
      // try fetching the file from the network
      return await fetch(request);
    } // end try
    catch (error) {
      // otherwise look for a cached version of the file
      return await caches.match(request);
    } // end catch
  }() // end async function
); // end respondWith

fetchEvent.respondWith(
  // try fetching the file from the network
  fetch(request)
  .catch( error => {
    // otherwise look for a cached version of the file
    return caches.match(request)
    .then( responseFromCache => {
      if (responseFromCache) {
        return responseFromCache;
      } // end if
      // otherwise show the fallback page
      return caches.match('/offline.html');
    }); // end return match then
  }); // end fetch catch
); // end respondWith

fetchEvent.respondWith(
  async function() {
    try {
      // try fetching the file from the network
      return await fetch(request);
    } // end try
    catch (error) {
      // otherwise look for a cached version of the file
      const responseFromCache = await caches.match(request);
      if (responseFromCache) {
        return responseFromCache;
      } // end if
      // otherwise show the fallback page
      return caches.match('/offline.html');
    } // end catch
  }() // end async function
); // end respondWith
