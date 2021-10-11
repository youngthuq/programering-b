let main = document.querySelector('main')
let input = document.querySelector('#input')

const addCard = name => {
let newCard = document.createElement('div')
newCard.classList.add('card')
let newH = document.createElement('h1')
newH.innerHTML = name
newCard.append(newH)
main.append(newCard)
}

addCard('Fallout 4')
let names = ['LoL', 'Hoi4', 'GTA5', 'BTD6', 'CSGO', 'MC', 'Warframe', 'Doom', 'Dark Souls 3', 'Farming 19', 'Satisfactory', 'Mincraft' ]

names.push('Fallout 4')


names.map( name => addCard(name))

input.addEventListener('input', () => {
    let results = names.filter( name => name.toLowerCase().startsWith(input.value) )
    main.innerHTML = ''
    results.map( name => addCard(name) )
} )

console.log(names.length)


for(let i = 0; i < names.length; i++){
    console.log(names[i])
  }
  names.map( f => console.log(f) )



let newElement = document.createElement('div')

newElement.classList.add('classname')

let heading = document.createElement('h1')
heading.innerHTML = 'hej svejs'

newElement.append(heading)

document.querySelector('body').append(newElement)