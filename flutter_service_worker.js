'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c16c5255bd2b3ecb5869e03f77631387",
".git/config": "d3a97e3d65531e16f3d46bab118db90f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8bbec69fc81feb0f6e3d1df98a2f5d58",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "d7e040a5efdb1363ad7a1d5ba5cf99ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3f351860b425ba6e50edb9cfe822e89c",
".git/logs/refs/heads/main": "536584a0f475f981d494134f41919901",
".git/logs/refs/remotes/origin/main": "c866d04d5c5fea80c074b43034e9126e",
".git/objects/04/e472b21c20692dccb3a5101c771033e4375e2c": "f52eee07055249843fe7ebad3b9f12a2",
".git/objects/09/5190de6624a00a775fac9681676d5350224100": "da30e912052ef27825c108f8df6c0995",
".git/objects/0d/8f912110bb6e28289122915420f62b14420f3c": "127df7a2419ea06872c7c4ca62bce549",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1a/a9ac2057acbea27d51af1481f5fa6e2da2a437": "000bf13d7e44ddbb98e5d45917e6a6b9",
".git/objects/1d/a007ddadeb5edfc7cc1f395751eb67a29cc970": "dd7a40557142617ce60553031a412f29",
".git/objects/1f/4851d1bd15452bcd6feca5079ef39b856f4c3a": "68a5f842931902c4e1331dc54b003a6e",
".git/objects/1f/7b5f901768d34de37ef4ad4bf0452a1d3bf2ed": "bddb696fe9dbb4cad0d4bff1134d31fd",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/748c42cf5bf5354acef95231a730790660bbbd": "5fab4184e569c76a752a7517821e173b",
".git/objects/24/0914e6f30b63242656b25897b175cd993da392": "038a6028556f161b9d64bdf186f9594f",
".git/objects/25/8757c3a49bc9df63885cf4ea084b1bf91f26a1": "e0cd9497a0f9ae68bc34ebec0cf76103",
".git/objects/2b/069b2db4043be04b6038174f90d616508ff541": "bf8647eb17d9454c1c158cfd2a4c3418",
".git/objects/2c/587c3f31223b65f66391c61c454a90087ed3f3": "f8249954aa9c7f683db80091afafe2c1",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/b8b46f5ad1a11a5992c39067f0202e6c7e1e5c": "9c8ce6f7251b721d3155519c18754153",
".git/objects/3c/161fd05a0d442c274ff0c94d1155fce9cb3159": "01af0e98865234417c804c34a55acad0",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/42/077e3b99a3e13a44470586146bed3f7c4618a6": "fdad96991bef2141700192182b0466b6",
".git/objects/42/f869a79c7b06a4a46e42b7fc061b8b0f3b703c": "3ca0c3e691dd33edf4a25e7b2c5cad9e",
".git/objects/47/3894eb53fac0912da3c058ad51ba23406818d2": "9d8a71d5fb704c64f945716c1babbd8b",
".git/objects/48/6a9793172c6e756d2b077ad66a71330887c5eb": "f42b669a21e2582d5e930f935aefaf49",
".git/objects/4b/d53fd31d4d0aed5d8c29eabaee53d99b383acf": "dd1fdb94d84174d68880feb5e6912088",
".git/objects/4b/f30b342b4f1ac19400522451713db15dbf78aa": "9b730d22a6287904ca0763af3214be4b",
".git/objects/4e/2782744bae5a6b116969bef2336b5281557ef8": "4b8a1b45c3998b649cdf7db144708a60",
".git/objects/51/ae2c8d7710512d2080d0e37e7c4db5bc755977": "dfa3a5f2296a27a7f31b13fafca5be81",
".git/objects/54/aced444fbc6c8e50891826204cf3f2edc6e82c": "fdbb343f05204f023d5e8ed5fdc4c29b",
".git/objects/57/08a1697ce4400db34a84c8c9e91067a93e3cc7": "5b55bf47b16c5ae9638976fc336dfbf3",
".git/objects/5b/ed5b19c637bf53b987da86b2c458f2279e1ab9": "e6f4631e47d986efeccdc9606e4d35cd",
".git/objects/60/38cec98b032e7f4dcec0d67eabde42a5b507ee": "4e4f11149c6690d06eb601c4fc759d25",
".git/objects/69/1a37f8e2e82e179ca8ff1ddeb5b8dc86cdf2a9": "0057625e2142400caf29e8990e2f5343",
".git/objects/6e/fbf734297ea5d31454ea0d5f4c6eda688fe723": "75e0a768129c1e218337ce9465d10af6",
".git/objects/72/4e240b58dc57592d9a0a06b9539878fe1f5136": "5bfaaea378218b49f907c77e23c8b28b",
".git/objects/73/2814ce628ef6fb74c2fc734f38e3dffad6a955": "01e90f51d287249380bfc7617f6769bb",
".git/objects/74/d05e7cbc669e8c696e5b6656f8a0f5c01a6418": "afe4436ac3772bb3dac04e59df27d8a1",
".git/objects/77/9746aee171183a0097d6accb7c000f194ed4cc": "07f6fed0b9e6a02c0876441c84942ffd",
".git/objects/7e/8cd33dc4a6521ab7d40c83c2350ffe2edebf63": "89b5b2c0d4fa8ba67d3a19fdb614f487",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/2db57c73aeca3e3cbb3c6dc518239d3b2428ae": "7adb7070f4f4809e3fa24177b6941cd9",
".git/objects/98/061fd043a2577400a78163b1a669b3970352cd": "e6040f7d5c88a1781b759be91be465c9",
".git/objects/9c/a08db325884cb0101bee2b5e2878b5c41cb88a": "00b5a7854398a227128d2a02b1402483",
".git/objects/9f/751001e0a9585cee8c3530161c85e81c51a913": "986537dfc4015cbfad4ca403a360ee1c",
".git/objects/a4/411b76e9bf74dd69f1616785b0c8b581807c80": "fc94aa4b7d19fe9a201fa65d81224bac",
".git/objects/a6/20803814cdb7634bae02c32b9b638f20b48a1a": "fa698cac8bf27bbf03bf9c31e3ac0048",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a9/7c98bcbc04e94d44164c4afc8ce8bc1be55108": "8b2c0ef09c39a3d706c514e1d829bf2f",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b6/cdbaf1c5b62f526d0de39c26cb8894fe1ebac9": "1da320c185a46b1c95df3b6d0684452e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/481fa83e33fcd9dd007f95ae18a418f73096cf": "9cbc07db7614526a00c7318f5055e79d",
".git/objects/bd/95b12d6e5c388fe2a69846cc33f778dbe207c1": "0f4195ab44a3fde562a7117f385fea2c",
".git/objects/cf/92492fc38db6d4a8df4edc1766b3b10779030a": "2c42964643d084d3f5b49d1ff08b33ea",
".git/objects/d1/214a82bc1076eee728834a89bf79273e50d968": "50a1e00a7c4e4e11b5686da27c976577",
".git/objects/d1/fbd5a80c9b9615e84dba5b879b86800635e5b2": "69ab507e6bbc947bbfa98a6d09c36088",
".git/objects/d9/4261bc4cf94e07a96a7313f2d5bfe7485dd3f1": "fc1bd40f3014e445ac1f348712badff0",
".git/objects/d9/72e374effe94549edb570c64bc86d5ea753dca": "a74053ccf845113f49873cd8ff107911",
".git/objects/e1/a68b96921a7bf43fb9f499d0803f4c60f5d634": "8a7fa63e7ce595755af556beee795046",
".git/objects/e5/6d480ca33db28a2177e2ee01c756c3bd201da9": "8e8c83cea85c0787709576cf6367120e",
".git/objects/ef/204db7f1a4a413ff940fd2f5073deec08bea4e": "fbc95d07200e48a7635aa4ecf7f95689",
".git/objects/ef/c3a19acd559a0b15c833752539500925260ce0": "32e7ba1f70922b45c8ee88fb02676aa0",
".git/objects/f0/86610e38b32792bafeb808661807fcb0a387b3": "b037b768f9fe57a41ce88feb50308455",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f3/e8093fe667e6d83103a705f51833aea52e4f15": "d66c8ab575b5414c8e8c32488da6975f",
".git/objects/fb/c23e2747e0345c5245bf7d50e862bca5873633": "5f7b819ae93c2402f09d1e9fe803f779",
".git/ORIG_HEAD": "6eec0c6cd45a8ce71add47a19ceb022c",
".git/refs/heads/main": "eaa6b889d4d9ce9b874d71045420e3c8",
".git/refs/remotes/origin/main": "eaa6b889d4d9ce9b874d71045420e3c8",
"assets/AssetManifest.json": "06260bf65b88f5b1419db2308a322811",
"assets/FontManifest.json": "d8e613a9aa406ab97eb70b3223d99c6a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/lib/assets/fonts/Kayak%2520Sans%2520Bold.otf": "52f454c59e152ac057e98ab29391154f",
"assets/lib/assets/fonts/Kayak%2520Sans%2520Light.otf": "ddf4cb1303991fbe401e3338904dccb9",
"assets/lib/assets/fonts/Kayak%2520Sans%2520Regular.otf": "d8615485c60d912f390ae3b7d33420d8",
"assets/lib/assets/images/circles_loginscreen.png": "795d8e3becdb8dd4a5932c76f9529309",
"assets/lib/assets/images/circles_logo.jpg": "f654534cc7fa5041d31cc94a53a7d9f3",
"assets/lib/assets/images/Finished.jpg": "3fca523ea2375626bed4b59013894b4c",
"assets/lib/assets/images/fountain.jpg": "520799c43b766aac045b43fd0a19bba3",
"assets/lib/assets/images/greg.png": "df445cc304f6c037e8b57b95d391c735",
"assets/lib/assets/images/penguin.jpg": "51247540c4fb77a97413736842a99cdb",
"assets/lib/assets/images/Rectangle%252019.jpg": "493dd9e1ab1398483af4c69582abd112",
"assets/lib/assets/images/sort.png": "1c13332b82986d154349a50d9a7afdbf",
"assets/lib/assets/SVGs/EventsIcon.svg": "2d23fce8b05b224ecc5d8d19d07f4158",
"assets/lib/assets/SVGs/Menu%2520SVG.svg": "f5bb4fa379513b5a15f89a804f92ce27",
"assets/NOTICES": "358ea218385b5a9f73125a298086c54d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "cf76d2de72a6b4e09a947124cfe31e55",
"/": "cf76d2de72a6b4e09a947124cfe31e55",
"main.dart.js": "98a04b74bb970933ee603316e6f8ce74",
"manifest.json": "7280859f0459a2bab05319d9cf82fb0e",
"version.json": "08e7b31a9d1bbf9904e3058e39b21bb8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
