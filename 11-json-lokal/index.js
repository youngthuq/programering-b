fetch('./data/birds.json')

    .then( res => res.json() )

    .then( json => {
        console.log(json.birds[2].members[0])
    })