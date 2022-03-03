let frames = [

    {
        frame: 'Våben',
      
    },    
    {
        frame: 'Månestøv murer',
       
        
    },  
    {
        frame: 'Lavarør',
       
    }
  
]

frames.map( frames => {
    let newDiv = document.createElement('div')
    let htmlString = '<h1>' + frames.frame + '</h1>' 
   
    newDiv.innerHTML = htmlString
    document.querySelector('body').append(newDiv)
} )