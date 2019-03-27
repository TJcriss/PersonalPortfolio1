import { people } from '../data/people'

const men = people.filter(person => person.gender === 'male')
const women = people.filter(person => person.gender === 'female')
const other = people.filter(person => (person.gender === 'n/a') || (person.gender === 'hermaphrodite') || (person.gender === 'none'))

// console.log(men, women, other);

const allHomeWorlds = people.map(person => {
    return { name: person.name, home: person.homeworld}
})



const mainContainer = document.createElement('div')
mainContainer.className = 'container'

men.forEach((man) => {
    let manElement = document.createElement('div')
    manElement.className = 'box'
    manElement.textContent = man.name
    let eyeColor = document.createElement('p')
    eyeColor.textContent = man.eye_color
    manElement.appendChild(eyeColor)
    mainContainer.appendChild(manElement)
})

women.forEach((man) => {
    let manElement = document.createElement('div')
    manElement.className = 'box'   
    manElement.textContent = man.name
    let eyeColor = document.createElement('p')
    eyeColor.textContent = man.eye_color
    manElement.appendChild(eyeColor)
    mainContainer.appendChild(manElement)
})

document.body.appendChild(mainContainer)