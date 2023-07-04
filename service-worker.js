/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [
  ['assets/extra/background-grid.svg', '5d836873ef80fb91da77b39dff092922'],
  ['assets/extra/debate-reviews-tool-preview.mp4', '6a916b88cfa12f37b7368707bfe3c08f'],
  ['assets/extra/favicon.png', 'cdbc82a3d2888276e13a118adb609429'],
  ['assets/extra/love-counter.svg', '85b7670f71c083233cadcfdcdbdf5abe'],
  ['assets/extra/video-background.mp4', '04f6f3a7f83c10da8e760454ae58dc24'],
  ['assets/images/no-webp/bg.jpg', 'aaf18518ef4da88b5ec517249292bd67'],
  ['assets/images/no-webp/debate-reviews-tool.png', 'c173eb8c19f84110974a9468f235c426'],
  ['assets/images/no-webp/dmitruk-tattoo.png', '3bb871a36ed3129845a2cc849c09139e'],
  ['assets/images/no-webp/dolya-krok.png', '4413bf94583fa2f772fa2c0bf85182e5'],
  ['assets/images/no-webp/flag-ukraine.png', '7f8d0d13d4923f02c3733c199e256213'],
  ['assets/images/no-webp/logo_white.png', 'e3507e906e60de221ff34b68e0f789e2'],
  ['assets/images/no-webp/mark-bud.png', '24d40fdeaed802d4ff8363da713b5c7c'],
  ['assets/images/no-webp/nmt-calculator.png', 'fa46122119a64d4315adf20d0ac39095'],
  ['assets/images/no-webp/palet-service.png', '155d9331e02f392d9e3ba2611f144e9c'],
  ['assets/images/no-webp/party-popper.png', '4f04748231ff215f76502162b445b097'],
  ['assets/images/no-webp/raised-hand.png', 'aceb4beb4d41b89657c3bd0ffac1802a'],
  ['assets/images/no-webp/rocket.png', 'fbbed9ae47a00d1305772495ece6248b'],
  ['assets/images/no-webp/soft-prevention.png', '8e4444c5b41bff9bf740dcd681764063'],
  ['assets/images/no-webp/tea-hub.png', 'f8bdd70b8868ea60f6d2763813d63c38'],
  ['assets/images/no-webp/tsm-group.png', '376fa946f9bc465cb1756913650a2fb8'],
  ['assets/images/no-webp/waving-hand.png', '438eb2be68856ef7c41a1744184f3d92'],
  ['assets/images/webp/bg.webp', '59d90ff809f32a56bde822d228ad94d5'],
  ['assets/images/webp/debate-reviews-tool.webp', '359abd327d70292d7eeebd50e03fd64d'],
  ['assets/images/webp/dmitruk-tattoo.webp', 'f102d987a9da3076b663b218c8f0e7c3'],
  ['assets/images/webp/dolya-krok.webp', '31ad4b6351aeb0dfc90f6d2ed42b1ec4'],
  ['assets/images/webp/flag-ukraine.webp', 'f1119ac42d29d1cc7cfa46a971be59a0'],
  ['assets/images/webp/logo_white.webp', '33a3bbc48728bf58ab7b781e0874b52b'],
  ['assets/images/webp/mark-bud.webp', 'ed73cdeaed7f99ec69c8211f5eeedc36'],
  ['assets/images/webp/nmt-calculator.webp', '12e744d1ba46fa3426db478989b94d1e'],
  ['assets/images/webp/palet-service.webp', 'd894cb6a1c850fc66bdf15216617de70'],
  ['assets/images/webp/party-popper.webp', 'd6a52adcaa4630fb5479588e8cb687fd'],
  ['assets/images/webp/raised-hand.webp', '9827c2fe1c953e31c6c9ae6afc513e38'],
  ['assets/images/webp/rocket.webp', '80786e174774c0c37d7860cf17e1a560'],
  ['assets/images/webp/soft-prevention.webp', 'eed324ea0ad94c73669a27d166f9dcb8'],
  ['assets/images/webp/tea-hub.webp', 'b56d1c51dc743b4820c3a6e16e3eb4fe'],
  ['assets/images/webp/tsm-group.webp', 'cf70d4b72aefe701b90a14e3c4a9f952'],
  ['assets/images/webp/waving-hand.webp', '764fef4b8f64d5ded7c9eb2b87d6513b'],
  ['css/aos.css', '428ccc75b4d6f0c3219373ca417efb1c'],
  ['css/fonts.min.css', '5fa62c4d5013a89a6ed3d93419060716'],
  ['css/styles.css', 'b892dba6ab8ff2f8864e1d91d0e0c29d'],
  ['index.html', 'bd90d21dbb54cc72256580351bf354f3'],
  ['js/aos.min.js', '7f1bad834394d393f2666c2d7b1dc007'],
  ['js/fontawesome.min.js', '7a10f92a04f44bf2bdfcaf374bf17327'],
  ['js/glorytoukraine.js', '2d09c9d78ed8198be35da270a2726779'],
  ['js/header.js', '5159ffccaf997d33ba659536b44a2d80'],
  ['js/instant.min.js', '4202bbf819ffd6c58d76d4c9736b837e'],
  ['js/modal.js', '584463f5ee88a03b04b5d8ff33eb92c4'],
  ['js/typed-init.js', '5ab3c7af80ba2979d3d671e97f4de9e5'],
  ['js/typed.min.js', '914dc4d27610428ebc9d60715598de06'],
  ['js/video-background.js', '476ac63d5942f9e6648f210247402d84'],
  ['js/webp-support.min.js', '39961d93a6fa51a223406b70e66d7feb'],
  ['manifest.json', '47a8b0df6b693305860a4cd0879b51ab'],
];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');

var ignoreUrlParametersMatching = [/^utm_/];

var addDirectoryIndex = function (originalUrl, index) {
  var url = new URL(originalUrl);
  if (url.pathname.slice(-1) === '/') {
    url.pathname += index;
  }
  return url.toString();
};

var cleanResponse = function (originalResponse) {
  // If this is not a redirected response, then we don't have to do anything.
  if (!originalResponse.redirected) {
    return Promise.resolve(originalResponse);
  }

  // Firefox 50 and below doesn't support the Response.body stream, so we may
  // need to read the entire body to memory as a Blob.
  var bodyPromise = 'body' in originalResponse ? Promise.resolve(originalResponse.body) : originalResponse.blob();

  return bodyPromise.then(function (body) {
    // new Response() is happy when passed either a stream or a Blob.
    return new Response(body, {
      headers: originalResponse.headers,
      status: originalResponse.status,
      statusText: originalResponse.statusText,
    });
  });
};

var createCacheKey = function (originalUrl, paramName, paramValue, dontCacheBustUrlsMatching) {
  // Create a new URL object to avoid modifying originalUrl.
  var url = new URL(originalUrl);

  // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
  // then add in the extra cache-busting URL parameter.
  if (!dontCacheBustUrlsMatching || !url.pathname.match(dontCacheBustUrlsMatching)) {
    url.search += (url.search ? '&' : '') + encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
  }

  return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
  // If the whitelist is empty, then consider all URLs to be whitelisted.
  if (whitelist.length === 0) {
    return true;
  }

  // Otherwise compare each path regex to the path of the URL passed in.
  var path = new URL(absoluteUrlString).pathname;
  return whitelist.some(function (whitelistedPathRegex) {
    return path.match(whitelistedPathRegex);
  });
};

var stripIgnoredUrlParameters = function (originalUrl, ignoreUrlParametersMatching) {
  var url = new URL(originalUrl);
  // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
  url.hash = '';

  url.search = url.search
    .slice(1) // Exclude initial '?'
    .split('&') // Split into an array of 'key=value' strings
    .map(function (kv) {
      return kv.split('='); // Split each 'key=value' string into a [key, value] array
    })
    .filter(function (kv) {
      return ignoreUrlParametersMatching.every(function (ignoredRegex) {
        return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
      });
    })
    .map(function (kv) {
      return kv.join('='); // Join each [key, value] array into a 'key=value' string
    })
    .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

  return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function (item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache
    .keys()
    .then(function (requests) {
      return requests.map(function (request) {
        return request.url;
      });
    })
    .then(function (urls) {
      return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches
      .open(cacheName)
      .then(function (cache) {
        return setOfCachedUrls(cache).then(function (cachedUrls) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
              // If we don't have a key matching url in the cache already, add it.
              if (!cachedUrls.has(cacheKey)) {
                var request = new Request(cacheKey, {credentials: 'same-origin'});
                return fetch(request).then(function (response) {
                  // Bail out of installation unless we get back a 200 OK for
                  // every request.
                  if (!response.ok) {
                    throw new Error('Request for ' + cacheKey + ' returned a ' + 'response with status ' + response.status);
                  }

                  return cleanResponse(response).then(function (responseToCache) {
                    return cache.put(cacheKey, responseToCache);
                  });
                });
              }
            })
          );
        });
      })
      .then(function () {
        // Force the SW to transition from installing -> active state
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', function (event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches
      .open(cacheName)
      .then(function (cache) {
        return cache.keys().then(function (existingRequests) {
          return Promise.all(
            existingRequests.map(function (existingRequest) {
              if (!setOfExpectedUrls.has(existingRequest.url)) {
                return cache.delete(existingRequest);
              }
            })
          );
        });
      })
      .then(function () {
        return self.clients.claim();
      })
  );
});

self.addEventListener('fetch', function (event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond && navigateFallback && event.request.mode === 'navigate' && isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches
          .open(cacheName)
          .then(function (cache) {
            return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
              if (response) {
                return response;
              }
              throw Error('The cached response that was expected is missing.');
            });
          })
          .catch(function (e) {
            // Fall back to just fetch()ing the request if some unexpected error
            // prevented the cached response from being valid.
            console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
            return fetch(event.request);
          })
      );
    }
  }
});
