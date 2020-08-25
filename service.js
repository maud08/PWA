const version = '0.0.1';

self.addEventListener('install', event => {
    console.log('Install' + version)
    return self.skipWaiting();
})

self.addEventListener('activate', event =>{
    console.log('activate')
    return self.clients.claim();
})

self.addEventListener('fetch',event =>{
    console.log(event);
})