/* Mise en cahce par workbox */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');


const version = '2';
const oldVersion = '-1'

self.addEventListener('install', event => {
    console.log('Install' + version)
    return self.skipWaiting();
})

self.addEventListener('activate', event =>{
    console.log('activate')
    event.waitUntil(
        caches.delete('desing-cache-' + oldVersion),
        caches.delete('appi-cache-' + oldVersion)
    )
    return self.clients.claim();
})

/* self.addEventListener('fetch',event =>{
    console.log(event);
}) */

if(workbox){
    console.log("Workbox is load")
    workbox.precaching.precacheAndRoute([
        {
            url: "index.html"
        },
        {
            url: "main.js"
        }
    ])

    workbox.routing.registerRoute(
        /(.*)\.(?:png|gif|jpg|jpeg|css)$/,
        new workbox.strategies.CacheFirst({
            cacheName: "design-cache-"+version,
            plugins :[
                new workbox.cacheableResponse.CacheableResponsePlugin({
                    maxEntries : 50,
                    maxAgeSeconds: 30 * 24 * 60 * 60 //30 days
                })
            ]
        })
    )

    workbox.routing.registerRoute(
        "https://api.punkapi.com/v2/beers",
        new workbox.strategies.NetworkFirst({
            cacheName: "api-cache-"+version
        })
    )
}
else{
    console.log("alert", "error Workbox")
}