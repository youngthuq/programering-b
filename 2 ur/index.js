let timer = document.querySelector('#timer')
let minutter = document.querySelector('#minutter')
let sekunder = document.querySelector('#sekunder')
let thomas = document.querySelector('#thomas')
let button = document.querySelector('#button')


thomas.style.backgroundImage = "url('./assets/glad.png')"



const settid = () => {
    let tid = new Date()
    
    thomas.style.marginLeft = 1.5 * tid.getSeconds() + '%'
    if(tid.getSeconds() < 30){
        thomas.style.backgroundImage = "url('./assets/glad.png')"
    }else{
        thomas.style.backgroundImage = "url('./assets/Udklip.png')"
    }
    let nul = ''
    nul = ''
    if(tid.getHours() < 10) nul = '0'
    timer.innerHTML = nul + tid.getHours()

    nul = ''
    if(tid.getMinutes() < 10) nul = '0'
    minutter.innerHTML = nul + tid.getMinutes()

    nul = ''
    if(tid.getSeconds() < 10) nul = '0'
    sekunder.innerHTML = nul + tid.getSeconds()

}

setInterval(settid, 1000)

