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
    "revision": "88c53de2d5c7cbf8b9273d44bce966e3"
  },
  {
    "url": "/static/css/index.4d49007a.css"
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
    "url": "/static/js/index.d39eb856.js"
  },
  {
    "url": "/static/js/manifest.70e64f76.js"
  },
  {
    "url": "/static/js/vendor.8e2789b6.js"
  },
  {
    "url": "/static/js/vue.a8d80349.js"
  },
  {
    "url": "/static/js/workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  },
  {
    "url": "/appshell",
    "revision": "c40784fc425ae339c37849d77c652d9b"
  }
]);

// Define response for HTML request.
workboxSW.router.registerNavigationRoute('/appshell');
