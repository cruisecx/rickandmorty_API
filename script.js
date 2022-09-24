let card = document.querySelector('.card')
let btn = document.querySelector('.btn')
let title = document.querySelector('.title')
card.style.display = 'none'

const addInfoCharacter = () => {
    const url = `https://rickandmortyapi.com/api/character/${generateId()}`
    const imagee = document.querySelector('img')
    const namee = document.querySelector('.name')
    const speciess = document.querySelector('.species')
    const genderr = document.querySelector('.gender')
    const originn = document.querySelector('.origin')
    const statuss = document.querySelector('.status')
    const location = document.querySelector('.location')

    fetch(url)
    .then(response => response.json())
    .then((data) => {
        imagee.src = data.image
        namee.innerHTML = data.name
        speciess.innerHTML = data.species
        genderr.innerHTML = data.gender
        originn.innerHTML = data.origin.name
        statuss.innerHTML = data.status
        location.innerHTML = data.location.name
    })
}   

const generateId = () => {
    const randomId = Math.floor(Math.random() * 820)
    console.log(randomId)
    return randomId
}

const animation = () => {
    card.style.animation = 'opc 1s linear'
    btn.style.animation = 'opc 1s linear'
    title.style.animation = 'opc 1s linear'
}

const main = () => {
    card.style.display = 'flex'
    animation()
    generateId()
    addInfoCharacter()
}

btn.addEventListener('click', main)