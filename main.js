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

const installBtn = document.querySelector('.install');

let defferedPrompt;

window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault()
    defferedPrompt = e
    installBtn.style.display = "block";
})

installBtn.addEventListener('click', e => {
    installBtn.style.display = "none"
    defferedPrompt.prompt()

    defferedPrompt.userChoice.then( choiceResult => {
        if(choiceResult.outcome === 'accepted'){
            console.log('install ok')
        }else{
            console.log('install foireusse')
        }
        defferedPrompt = null
    })
})