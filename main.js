if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service.js')
        .then(function(reg){
            console.log('notify', 'Service worker is starting' + reg)
        })
        .catch( error => {
            console.log('alert', 'Erreur de service worker with' + error)
        })
    })

}
else{
    console.log('alert', 'Votre navigateur n\'est pas compatible avec notre service')
}