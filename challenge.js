let player = {
    name: "Dan",
    chips: 300
}

let myCards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let result = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": \u20ac" + player.chips

function getRandomCard() {

let numberRandom =  Math.floor(Math.random() * 13) +1

if (numberRandom === 1){
    return 11
}else if(numberRandom > 10){
return 10 }else{
return numberRandom}
}

function startGame() {
    isAlive = true
    let cardOne = getRandomCard()
    let cardTwo = getRandomCard()
    myCards = [cardOne, cardTwo] 
    sum = cardOne + cardTwo
    renderGame()
}


function renderGame() {
    cardsEl.textContent = "Tue Carte: "

    for(let i = 0; i < myCards.length; i++){
        cardsEl.textContent += myCards[i] + " "
    }

    if(sum <= 20) {
        result = "Pescare un'altra carta?"
    sumEl.textContent = "Somma: " + sum
    hasBlackjack = false
    }

     else if(sum === 21) {
        result = "Hai VINTO!"
        hasBlackjack = true
        sumEl.textContent = "Somma: " + sum
    }

    else {
        result = "Niente da fare, sei fuori"
        isAlive = false
        sumEl.textContent = "Somma: " + sum
    }


    messageEl.textContent = result



}
function newCard() {
if(hasBlackjack === false && isAlive === true){
    let drawCard = getRandomCard()
   sum += drawCard
   myCards.push(drawCard)
   renderGame()
}
}



//FOR LOOP
// let cards = [7,3,9]

// for(i = 0; i < cards.length; i++ ){
//     console.log(cards[i])
// }

/* <p id="greeting-el"></p>

let sentence = ["Hello", "my", "name", "is", "Per"]

let greetingEl =document.getElementById("greeting-el")

for(i = 0; i < sentence.length; i++){

    greetingEl.textContent += sentence[i] + " " per aggiungere uno spazio
} */
// RETURN
// let player1Time = 102

// let player2Time = 107

// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//     return player1Time
//     } else if(player2Time < player1Time){
//     return player2Time
// } else{
//     return player1Time
// }
// }
// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// function totalRaceTime(){
//     return player1Time + player2Time
// }
// let totalTime = totalRaceTime()
// console.log(totalTime)

//MATH
// Math.random()
// let randomNumber = Math.random() * 6 (da 0 a 5.99)
// console.log(randomNumber)

//  function randomNumber() {
//     let rollDice = Math.floor( Math.random() * 6 ) + 1
//     return rollDice
//  }
// console.log(randomNumber())

// && operator
// let hasSolved = false
// let hasHints = false
// if(hasSolved === false && hasHints === false){
//     showSolution()
// }
// function showSolution() {
//     console.log("showing...")
// }
// || OR OPERATOR
// let likesDoc = false
// let likesHorr = true
// if(likesDoc === true || likesHorr === true){
// recomendMovie()
// }
// function recomendMovie(){
//     console.log("ho il film che fa per te")
// }
// objects
// let airCastleList = {
//     isExpensive: true,
//     arriveBy: "bus",
//     price: 180,
//     images: ["img/castle1.png", "img/castle2.png"]
// }
// console.log(airCastleList.arriveBy)
// console.log(airCastleList.isExpensive)