import { films } from './assets/films.js'
import { people } from './assets/people.js'

console.log('Hey, I am Javascript on your page')

console.log(films)

let mainArea = document.querySelector('main')

films.forEach(function(film)
{
let filmDiv = document.createElement('div')
let title = document.createElement('h1')
let descr = document.createElement('p')

filmDiv.appendChild(title)
filmDiv.appendChild(descr)

title.textContent = film.title
descr.innerText = film.opening_crawl

mainArea.appendChild(filmDiv)
})

people.forEach(function(person) 
{
    let personDiv = document.createElement('div')
    let name = document.createElement('h1')
    let gender = document.createElement('h3')
    let pic = document.createElement('img')

    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)

    name.textContent = person.name
    gender.textContent = person.gender
    pic.src = 'https://starwars-visualguide.com/assets/img/characters/1.jpg'

    mainArea.appendChild(personDiv)

})