let data

fetch('./data/birds.json')

    .then( res => res.json() )

    .then( json => {
        console.log(json)
        data = json.birds
        document.querySelector('#title').innerHTML = json.description
        json.birds.map( bird => {
            newCard(bird)
        })
    })


    document.querySelector('#input').addEventListener('input', () => {
        let result = data.filter( bird => bird.family.includes(document.querySelector('#input').Value()) )
        document.querySelector('main').innerHTML = ''
        result.map( bird => newCard(bird))
    })

    document.querySelector('#s').addEventListener('click', () => {
        document.querySelector('#sb').classList.add('show')
    })
    document.querySelector('#close').addEventListener('click', () => {
        document.querySelector('#sb').classList.remove('show')
    })



    const newCard = (bird) => {
        let card = document.createElement('div')
        let heading = document.createElement('h2')
        let members = document.createElement('div')
        card.classList.add('card')
        members.classList.add('member')
        card.append(heading)
        card.append(members)
        heading.innerHTML = bird.family
        let list = ''
        bird.members.map( member => list += '<li>' + member + '</li>')
        members.innerHTML = list
        document.querySelector('main').append(card)
    }

 