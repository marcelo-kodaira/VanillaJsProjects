const keys = document.querySelectorAll('.key')


const clearClass = (e) =>{
    if(e.propertyName !== 'scale') return;

    e.target.classList.remove('active')
}


const play = (event) =>{

    const key = document.querySelector(`div[data-key="${event.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    if (!key) return;

    key.classList.add('active')
    audio.currentTime = 0
    audio.play()
    
}



window.addEventListener('keydown',play)
keys.forEach(key => key.addEventListener('transitionend',clearClass))