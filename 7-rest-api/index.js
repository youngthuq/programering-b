let activity

const getActibity = () => {
    fetch('https://www.boredapi.com/api/activity/')
        .then( Response => Response.json() )
        .then( json => creatCard(activity) )

}

const creatCard = a => {
    document.querySelector('#title').innerHTML = a.activity
    document.querySelector('#participants').innerHTML = a.participants
    document.querySelector('#acc').innerHTML = a.acc
    document.querySelector('#price').innerHTML = a.price
    document.querySelector('#cat').innerHTML = a.cat
}