let frames = [

    {
        frame: 'Yareli',
        element: ' Element Water',
        fasion: 'Fasion 100/100',
        op: ['Strengt 0/100'],
        companion: {
            type: 'Robot', 
            name: 'Helion'
        }
    },    
    {
        frame: 'Ember',
        element: 'Element Fire',
        fasion: 'Fasion 100/100',
        op: ['Strengt 0/100'],
        companion: {
            type: 'Kubrow', 
            name: 'Sunika'
        }
        
    },  
    {
        frame: 'Equenox',
        element: 'Element Radiation',
        fasion: 'Fasion 100/100',
        op: ['Strengt 0/100'],
        companion: {
            type: 'Kavat', 
            name: 'Smeeta'
        }
      
    },
    {
        frame: 'Hydron',
        element: 'Element water',
        fasion: 'Fasion 100/100',
        op: ['Strengt 0/100'],
        companion: {
            type: 'Robot', 
            name: 'Taxon'
        }
    },
    {
        frame: 'Barruk',
        element: 'Element Radiation',
        fasion: 'Fasion 100/100',
        op: ['Strengt 0/100'],
        companion: {
            type: 'Kubrow', 
            name: 'Haras'
        }
    },
    {
        frame: 'Saryn',
        element: 'Element Poison',
        fasion: 'Fasion 100/100',
        op: ['Strengt 0/100'],
        companion: {
            type: 'Robot', 
            name: 'Death Cube'
        }
    },
    {
        frame: 'Nyx',
        element: 'Element Radiaton',
        fasion: 'Fasion 100/100',
        op: ['Strengt 0/100'],
        companion: {
            type: 'Robot', 
            name: 'Death Cube Prime'
        }
    },
    {
        frame: 'Croma',
        element: 'Element Fire',
        fasion: 'Fasion 100/100',
        op: ['Strengt 0/100'],
        companion: {
            type: 'Kubrow', 
            name: 'Chesa'
        }
    },
    {
        frame: 'Zephyr',
        element: 'Element Wind',
        fasion: 'Fasion 100/100',
        op: ['Strengt 0/100'],
        companion: {
            type: 'Kubrow', 
            name: 'Pharaoh Predasite'
        }
    },
    {
        frame: 'Wisp',
        element: 'Element Radiation',
        fasion: 'Fasion 100/100',
        op: ['Strengt 0/100'],
        companion: {
            type: 'Kavat', 
            name: 'Crescent Vulpaphyla'
        }
    },
    {
        frame: 'Frost',
        element: 'Element Ice',
        fasion: 'Fasion 100/100',
        op: ['Strengt 0/100'],
        companion: {
            type: 'Kavat', 
            name: 'Vasca'
        }
    },
    {
        frame: 'Volt',
        element: 'Element Lightning',
        fasion: 'Fasion 100/100',
        op: ['Strengt 0/100'],
        companion: {
            type: 'Kubrow', 
            name: 'Helminth Charger'
        }
    },
  
]

frames.map( frames => {
    let newDiv = document.createElement('div')
    let htmlString = '<h1>' + frames.frame + '</h1>' 
    htmlString += '<p>' + frames.element + '</p>'
    htmlString += '<p>' + frames.fasion + '</p>'
    htmlString += '<p>' + frames.op.join(', ') + '</p>'
    htmlString += '<p>companion: ' + frames.companion.type + '</p>'
    htmlString += '<p>companion name: ' + frames.companion.name + '</p>'
    
    newDiv.innerHTML = htmlString
    document.querySelector('body').append(newDiv)
} )