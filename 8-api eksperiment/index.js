let api_key = 'RWc42v9DyIi4XWTdWlXYksHldL6S5Krh'

fetch('https://api.giphy.com/v1/gifs/trending?api_key=' + api_key)

.then( Response => Response.json() )
.then( json => {
    console.log(json.data[0].images.fixed_height.url)
    insertImage(json.data[0].images.fixed_height.url)
})



const insertImage = (url) => {
    let img = document.createElement('img')
    img.src = url 
    document.querySelector('body').append(img)
}