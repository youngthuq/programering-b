let button = document.querySelector('#button')
if ('#button') click => {
    fetch('https://www.boredapi.com/api/activity/')
    .then( Response => Response.json() )
    .then( json => {
        console.log(json)
        creatCard(json)
    } )
}
const getActivity = () => {
    fetch('https://www.boredapi.com/api/activity/')
        .then( Response => Response.json() )
        .then( json => {
            console.log(json)
            creatCard(json)
        } )
            
}
addEventListener = click 
const creatCard = a => {
    document.querySelector('#title').innerHTML = a.activity
    document.querySelector('#participants').innerHTML = a.participants
    document.querySelector('#acc').innerHTML = a.accessibility
    document.querySelector('#price').innerHTML = a.price
    document.querySelector('#cat').innerHTML = a.type
}

getActivity()

document.querySelector('#fetch').addEventListener('click', getActivity)
