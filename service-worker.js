/**
 * @file service-worker.js with workbox api
 * @desc [example](https://workbox-samples.glitch.me/examples/workbox-sw/)
 * @author qinshiwei(qinshiwei-pbj@hfax.com)
 */

/**
 * Import workbox-sw with `importScripts` function.
 * 1. Need adding publicPath manually.
 * 2. If the version of workbox updated, modification is also required.
 */
importScripts('/static/js/workbox-sw.prod.v2.1.2.js');

const workboxSW = new WorkboxSW({
    cacheId: 'lavas-cache',
    ignoreUrlParametersMatching: [/^utm_/],
    skipWaiting: true,
    clientsClaim: true
});

// Define precache injection point.
workboxSW.precache([
  {
    "url": "/index.html",
    "revision": "ea79c83be8c38967ee2926866ddae9c7"
  },
  {
    "url": "/static/css/index.eed546eb.css"
  },
  {
    "url": "/static/fonts/MaterialIcons-Regular.012cf6a1.woff"
  },
  {
    "url": "/static/fonts/MaterialIcons-Regular.a37b0c01.ttf"
  },
  {
    "url": "/static/fonts/MaterialIcons-Regular.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "/static/fonts/MaterialIcons-Regular.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "/static/js/index.d0adce23.js"
  },
  {
    "url": "/static/js/manifest.1dcca4f1.js"
  },
  {
    "url": "/static/js/vendor.9513ebc5.js"
  },
  {
    "url": "/static/js/vue.85880a42.js"
  },
  {
    "url": "/static/js/workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  },
  {
    "url": "/appshell",
    "revision": "62aacd70ae240a48106fbb856ac21908"
  }
]);

// Define response for HTML request.
workboxSW.router.registerNavigationRoute('/appshell');
