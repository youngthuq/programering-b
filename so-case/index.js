let idee1 = [

    {
        ide1: 'Våben',
    }
]
let idee2 = [   
    {
        ide2: 'Månestøv murer',
    }
]
let idee3 =[
    {
        ide3: 'Lavarør',
    }
  
]

idee1.map( idee1 => {
    let newDiv = document.createElement('div')
    let htmlString = '<h1>' + idee1.ide1 + '</h1>' 

    
    newDiv.innerHTML = htmlString
    document.querySelector('body').append(newDiv)
   
} )

idee2.map( idee2 => {
    let newDiv = document.createElement('div')
    let htmlString = '<h1>' + idee2.ide2 + '</h1>' 

    
    newDiv.innerHTML = htmlString
    document.querySelector('body').append(newDiv)
} )

idee3.map( idee3 => {
    let newDiv = document.createElement('div')
    let htmlString = '<h1>' + idee3.ide3 + '</h1>' 

    
    newDiv.innerHTML = htmlString
    document.querySelector('body').append(newDiv)

} )

