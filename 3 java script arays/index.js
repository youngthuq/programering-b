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

addCard('Mælke-Mand')
let names = ['Andreas', 'Theis', 'Frederik', 'Mie', 'Bjarke', 'Bjørn', 'Nagib', 'Sofus', 'Marius', 'Emil', 'Viktor', 'Lukas' ]

names.push('Mælke Mand')


names.map( name => addCard(name))

input.addEventListener('input', () => {
    let results = names.filter( name => name.toLowerCase().startsWith(input.value) )
    main.innerHTML = ''
    results.map( name => addCard(name) )
} )




//vi vil gerne lave et array
//for(let i = 0; i < names.length; i++){
//   console.log(names[i])
//}
