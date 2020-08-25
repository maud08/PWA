/* Mise en cahce par workbox */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');


const version = '0.0.2';

self.addEventListener('install', event => {
    console.log('Install' + version)
    return self.skipWaiting();
})

self.addEventListener('activate', event =>{
    console.log('activate')
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
            url: "style.css"
        },
        {
            url: "img/pwa192.png"
        },
        {
            url: "main.js"
        }
    ])
}
else{
    console.log("alert", "error Workbox")
}