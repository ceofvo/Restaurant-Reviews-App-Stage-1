
let staticCacheName = "restaurants-static-v1";

let cacheFilesAndUrls = [
  "./",
  "index.html",  
  "restaurant.html",
  "css/styles.css",
  "data/restaurants.json",
  "js/dbhelper.js",
  "js/main.js",
  "js/restaurant_info.js",
  "js/register_sw.js",
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
  "img/10.jpg"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches
      .open(staticCacheName)
      .then(cache => cache.addAll(cacheFilesAndUrls))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      if (response) {
         console.log("Service Worker: Found in cache ", e.request.url);
        return response;
      }
      else {
   return fetch(e.request);
}
    })
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(cacheNames => Promise.all(cacheNames.map(cache => {
      if (cache !== staticCacheName) {
        console.log("Service Worker: removing cached files from ", cache);
        return caches.delete(cache);
      }
    })))
  )
});
