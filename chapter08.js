// Open the cache of pages.
caches.open('pages')
.then( pagesCache => {
  pagesCache.keys()
  .then(keys => {
    let markup = '';
    // Loop through each item in the cache.
    keys.forEach( request => {
      // Make a link to the URL of each page.
      markup += `<li><a href="${request.url}">${request.url}</a></li>`;
    });
    // Finally, display the list of links.
    document.getElementById('history').innerHTML = markup;
  }); // end keys then
}); // end open

if (navigator.serviceWorker) {
  // create a button element
  const offlinebutton = document.createElement('button');
  offlinebutton.innerText = 'save for offline';
  offlinebutton.className = 'btn--offline';
  // and add the button to the page
  document.body.appendChild(offlinebutton);
}

offlinebutton.addEventListener('click', function (event) {
  // Save for later.
});

// When the button is pressed . . .
offlinebutton.addEventListener('click', function (event) {
  event.preventDefault();
  const offlinebutton = this;
  // Provide some feedback to the user
  offlinebutton.innerText = 'saving . . . ';
  // Open a cache
  caches.open('savedpages')
  .then( function (cache) {
    // Add the URL of the current page to the cache
    cache.add(window.location.href)
    .then( function () {
      // Provide some feedback to the user
      offlinebutton.innerText = 'saved for offline!';
    }); // end add then;
  }); // end open then;
}); // end addEventListener

localStorage.setItem('name', 'Jeremy Keith');

const myname = localStorage.getItem('name');

const data = {
  "key": "value",
  "other_key": "another value"
}

const data = {};
localStorage.setItem(
  window.location.href,
  JSON.stringify(data)
);

const data = {
  "title": document.querySelector('title').innerText
};

const data = {
  "title": document.querySelector('title').innerText,
  "description": document.querySelector('meta[name="description"]').getAttribute('content')
};

caches.open('savedpages')
.then( function (cache) {
  cache.add(window.location.href)
  .then( function () {
    const data = {
      "title": document.querySelector('title').innerText,
      "description": document.querySelector('meta[name="description"]').getAttribute('content')
    };
    localStorage.setItem(
      window.location.href,
      JSON.stringify(data)
    );
    offlinebutton.innerText = 'saved for offline!';
  }); // end add then
}); // end open then

// Open the cache of saved pages.
caches.open('savedpages')
.then( pagesCache => {
  pagesCache.keys()
  .then(keys => {
    let markup = '';
    // Loop through each item in the cache.
    keys.forEach( request => {
      // Look up the corresponding metatdata in local storage.
      const data = JSON.parse(localStorage.getItem(request.url));
      // Make a descriptive link to the URL of each page.
      if (data) {
        markup += `<h3><a href="${request.url}">${data.title}</a></h3>`;
        markup += `<p>${data.description}</p>`;
      }
    });
    // Finally, display the list of links.
    document.getElementById('history').innerHTML = markup;
  }); // end keys then
}); // end open then
