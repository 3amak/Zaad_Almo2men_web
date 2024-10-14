'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b60f4db9470f97f291dc53aae8da9851",
"assets/AssetManifest.bin.json": "3e8ae5330e44cd73d8cb13bf811a78b9",
"assets/AssetManifest.json": "b51b828f9f9ccc4ec2d653b62642b1a0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f04de0a31409a48b097dabbab90abd23",
"assets/images/download.png": "fa798d3d19c8c9d4342a1a991d21b995",
"assets/images/prayingg.png": "ca14f48bb15a19943ff6dd363f0f7156",
"assets/images/roko3.png": "0d9b7f3482708eba01311eea7d5d4b65",
"assets/images/sojod.png": "bfe615dd619af73fc539508031379f27",
"assets/images/ta3kebat.png": "3ce5288070eecdb93297c13d5f22511d",
"assets/images/zaad.png": "ef5e44402814be1a2901c1da7e34e83a",
"assets/images%255Cdownload.png": "fa798d3d19c8c9d4342a1a991d21b995",
"assets/images%255Croko3.png": "0d9b7f3482708eba01311eea7d5d4b65",
"assets/images%255Csojod.png": "bfe615dd619af73fc539508031379f27",
"assets/images%255Czaad.png": "ef5e44402814be1a2901c1da7e34e83a",
"assets/NOTICES": "727057f45a670929a5a430619b44e5ff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/sound/ali.mp3": "49208261a12ce519deadb2e2900a98dd",
"assets/sound/ashour.mp3": "c1f1da0ea5c1ca2281856339109a8a95",
"assets/sound/fr.mp3": "fcd72d3c8f4b7e9a69cafb16f23d7b9a",
"assets/sound/ghrayebe.mp3": "c1a8eb06bc59b4c3db52c6e85730f24e",
"assets/sound/gr.mp3": "2191bf3d00c58395fc3f05969544c0be",
"assets/sound/ift.mp3": "c3790ec8ebc09d98cd726b4f771a9f3d",
"assets/sound/mon.mp3": "4b7691d2f093d339f746ef60b6416782",
"assets/sound/mz.mp3": "2aa1156bb50539360bac5adb5f166000",
"assets/sound/sat.mp3": "14a11f8bc2174c78306c0b1bf3912494",
"assets/sound/sun.mp3": "04b3a5aef45ac3732724d554095b37c6",
"assets/sound/taw.mp3": "ea0dc87fe43a0d232022402ffdc91606",
"assets/sound/th.mp3": "378884df03ffb6641833081db89ffc0f",
"assets/sound/tu.mp3": "74517120bd7c59e14db304b065deffd2",
"assets/sound/wareth.mp3": "fba6f238477da06150fd6e8c81cef461",
"assets/sound/wen.mp3": "e58cee4886f60fda52de24e814905e93",
"assets/sound/yassin.mp3": "e853f81cdfec10889fccd40516eee441",
"assets/sound%255Cali.mp3": "49208261a12ce519deadb2e2900a98dd",
"assets/sound%255Cashour.mp3": "c1f1da0ea5c1ca2281856339109a8a95",
"assets/sound%255Cfr.mp3": "fcd72d3c8f4b7e9a69cafb16f23d7b9a",
"assets/sound%255Cghrayebe.mp3": "c1a8eb06bc59b4c3db52c6e85730f24e",
"assets/sound%255Cgr.mp3": "2191bf3d00c58395fc3f05969544c0be",
"assets/sound%255Cift.mp3": "c3790ec8ebc09d98cd726b4f771a9f3d",
"assets/sound%255Cmon.mp3": "4b7691d2f093d339f746ef60b6416782",
"assets/sound%255Cmz.mp3": "2aa1156bb50539360bac5adb5f166000",
"assets/sound%255Csat.mp3": "14a11f8bc2174c78306c0b1bf3912494",
"assets/sound%255Csun.mp3": "04b3a5aef45ac3732724d554095b37c6",
"assets/sound%255Ctaw.mp3": "ea0dc87fe43a0d232022402ffdc91606",
"assets/sound%255Cth.mp3": "378884df03ffb6641833081db89ffc0f",
"assets/sound%255Ctu.mp3": "74517120bd7c59e14db304b065deffd2",
"assets/sound%255Cwareth.mp3": "fba6f238477da06150fd6e8c81cef461",
"assets/sound%255Cwen.mp3": "e58cee4886f60fda52de24e814905e93",
"assets/sound%255Cyassin.mp3": "e853f81cdfec10889fccd40516eee441",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "8c679118966a2adc8cbaa7d883245e9f",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "1920179e49e8f99f270d47993ab2a633",
"icons/Icon-192.png": "111476721ed39814f4f1e4b4ce83b359",
"icons/Icon-512.png": "d74f3f33a9391b3f6582dd43ad767f29",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "96dfad10c0627ef2b3e9937d8e0eaf60",
"/": "96dfad10c0627ef2b3e9937d8e0eaf60",
"main.dart.js": "1556b23f2df2de741241868c0193cdeb",
"manifest.json": "0cbd98b785d591bae0007db79fb7b39e",
"version.json": "66c86b2376df88570d372da8feba2eae"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
