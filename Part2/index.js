//console.log("part 2 script attatched")

let cardID = document.querySelector("#card-id") 
let cardStyle = document.querySelector("#card-style")
let editButton = document.querySelector("#edit-card-btn")

const setCard = () => {
    let card = document.querySelector(`#${cardID.value}`)
    //console.log(card) 
    card.style.color = document.querySelector(`#card-style`).value
    //console.log(card.style.color)
}

document.querySelector("#edit-card-btn").addEventListener(`click`, setCard)