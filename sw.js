this.addEventListener('install', event=>{
  event.waitUntil(
    caches.open('cacheData').then(cache=>{
      cache.addAll([
        // '/index.html',
        // '/details.html',
        // '/car.css',
        // '/index.js',
        // '/images/Baleno.png',
        // '/images/Duster.png',
        // '/images/elitei20.png',
        // '/images/mustang.png',
        // '/images/ertiga.png',
        // '/images/SCorss.png',
        // '/images/thar.png',
        // '/images/Tucson.png',
        // '/images/Xcent.png'

      ]);
    })
  );
})


this.addEventListener('fetch', event=>{
 event.respondWith(
   caches.open('cacheData').then(cache=>{
     return cache.match(event.request).then(response=>{
       return response || fetch(event.request).then(response=>{
         cache.put(event.request, response.clone());
         return response;
       });
     });
   })
 );
})
