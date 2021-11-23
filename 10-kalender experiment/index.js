
fetch('./kalender.json')
    .then( res => res.json() )
    .then( json =>{
        console.log(json)
        json.days.map(door => {
            let div = document.createElement('div')
            div.id= door.date + '-day'
            div.classList.add('door')
            div.style.width = door.width
            div.style.height = door.height
            div.innerHTML = door.date
            document.querySelector('main').append(div)
        })
    })


    const setImage = (id, obj) => {
    
    }

    const setYoutube = (id, obj) => {

    }
    const setBordApi = (id, obj) => {

    }