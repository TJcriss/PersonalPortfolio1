import { people } from '../data/people.js'
import { planets } from '../data/planets.js'

const allHomeWorlds = people.map(perosn => {
    let foundWorld = planets.find(planet => {
        return planet.url === personalbar.homeworld
    })
    return {
        name: personalbar.name,
        home: foundWorld.name
    }
})

console.log(allHomeWorlds);


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

document.body.appendChild(mainContainer)