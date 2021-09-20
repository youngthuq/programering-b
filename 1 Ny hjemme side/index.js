let sekunder = 0

let tid = document.querySelector('#tid')
let footer = document.querySelector('footer')
let knap = document.querySelector('#button')
let main = document.querySelector('main')
const restart = () => {
    sekunder = 0
}

knap.addEventListener('click', restart)

setInterval(()=>{
    sekunder++
    //betingelse
    if(sekunder > 60){
        sekunder = 0
    }
    
    else if(sekunder > 10 && sekunder < 20 ){
        main.style.backgroundColor = 'orange'
    }
    
    else if(sekunder > 20){
        main.style.backgroundColor = 'blue'
    }else{
        main.style.backgroundColor = 'gray'
    }
    document.querySelector('footer').style.width = 100/60 * sekunder + '%'

    if(tid.style.borderRadius == '0px'){
        tid.style.borderRadius = '50%'
        tid.style.backgroundcolor = 'lightgray'
        tid.style.color = 'darkslategray'
        footer.style.borderBottomRightRadius = '0'
        footer.style.borderTopRightRadius = '0'
        
    }else{ 
        footer.style.borderBottomRightRadius = '1rem'
        footer.style.borderTopRightRadius = '1rem'
        tid.style.borderRadius = '0px'
        tid.style.backgroundcolor = 'gray'
        tid.style.color = 'white'
    }
    tid.innerHTML = sekunder
}, 1000)