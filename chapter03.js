addEventListener('fetch', function (event) {
  console.log('The service worker is listening.');
});

addEventListener('install', function (event) {
  console.log('The service worker is installing . . . ');
});

addEventListener('activate', function (event) {
  console.log('The service worker is activated.');
});

addEventListener('fetch', function (event) {
  // Do something with 'event' data.
});

addEventListener('fetch', function (z) {
  // Do something with 'z' data.
});

addEventListener('fetch', function (fetchEvent) {
  // Do something with 'fetchEvent' data.
});

addEventListener('fetch', fetchEvent => {
  // Do something with 'fetchEvent' data.
});

addEventListener('fetch', fetchEvent => {
  var request = fetchEvent.request;
});

addEventListener('fetch', fetchEvent => {
  const request = fetchEvent.request;
});

addEventListener('fetch', fetchEvent => {
  const request = fetchEvent.request;
  console.log(request);
});

addEventListener('fetch', fetchEvent => {
  fetchEvent.respondWith(
    new Response('Hello, world!')
  ); // end respondWith
}); // end addEventListener

fetch(request)
.then( responseFromFetch => {
  // Success!
})
.catch( error => {
  // Failure!
});

addEventListener('fetch', fetchEvent => {
  const request = fetchEvent.request;
  fetchEvent.respondWith(
    fetch(request)
    .then( responseFromFetch => {
      return responseFromFetch;
    }) // end fetch then
  ); // end respondWith
}); // end addEventListener

addEventListener('fetch', fetchEvent => {
  const request = fetchEvent.request;
  fetchEvent.respondWith(
    fetch(request)
    .then(responseFromFetch => {
      return responseFromFetch;
    }) // end fetch then
    .catch(error => {
      return new Response('Oops! Something went wrong.');
    }) // end fetch catch
  ); // end respondWith
}); // end addEventListener

return new Response('<h1>Oops!</h1> <p>Something went wrong.</p>');

return new Response(
  '<h1>Oops!</h1> <p>Something went wrong.</p>',
  {
    headers: {'Content-type': 'text/html; charset=utf-8'}
  }
);
