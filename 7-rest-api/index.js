let activity

const getActibity = () => {
    
}
fetch('https://www.boredapi.com/api/activity/')
    .then( Response => Response.json() )
    .then( json => {console.log(json)})