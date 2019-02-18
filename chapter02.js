if (navigator.serviceWorker) {
  // Your code goes here.
}

if ('serviceWorker' in navigator) {
  // Your code goes here.
}

if (navigator.serviceWorker !== undefined) {
  // Your code goes here.
}

navigator.serviceWorker.register('/myapp/serviceworker1.js');
navigator.serviceWorker.register('/myotherapp/serviceworker2.js');

navigator.serviceWorker.register('/serviceworker1.js');
navigator.serviceWorker.register('/myapp/serviceworker2.js');

navigator.serviceWorker.register('/serviceworker2.js', {
  scope: '/myapp/'
});

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/serviceworker.js');
}

promise
.then( function () {
  // Yay! It worked.
});

promise
.then( function () {
  // Yay! It worked.
})
.catch( function () {
  // Boo! It failed.
});

promise.then(
  function () {
    // Yay! It worked.
  }
).catch(
  function () {
    // Boo! It failed.
  }
);

promise
.then(doSomething)
.catch(doSomethingElse);


if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/serviceworker.js')
  .then( function () {
    console.log('Success!');
  })
  .catch( function () {
    console.error('Failure!');
  });
  console.log('All done.');
}

navigator.serviceWorker.register('/serviceworker.js')
.then( function (registration) {
  console.log('success!', registration.scope);
});

navigator.serviceWorker.register('/serviceworker.js')
.then( function (x) {
  console.log('success!', x.scope);
});

navigator.serviceWorker.register('/nothing.js')
.catch( function (error) {
  console.log('Failure!', error);
});

navigator.serviceWorker.register('/nothing.js')
.catch( function (y) {
  console.error('Failure!', y);
});

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/serviceworker.js')
  .then( function (registration) {
    console.log('Success!', registration.scope);
  })
  .catch( function (error) {
    console.error('Failure!', error);
  });
}
