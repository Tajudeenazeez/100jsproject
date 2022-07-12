const gameBackground = document.querySelector(".game__wrapper")
const nextPlayerPointer = document.querySelector(".player__dot")
const globalScore = document.querySelector(".player__score-1")
const rollDice = document.querySelector(".game-text-roll")
const hold = document.querySelector(".game-text-hold")
const newGame = document.querySelector(".game__heading")
const displayScore = document.querySelector(".game__img")

//create working variables
const score = [0, 0]
const currentScore = 0
let activePlayer = 0;
const imageArr = ["dice-1", "dice-2", "dice-3", "dice-4", "dice-5", "dice-6"]


//rule of game
//click roll should start the game with player one
//by rolling a dice
//rolling dice should be added to current

function throwDice(){
    let currentPlayer = document.querySelector(`.player__current-${activePlayer}`)
    currentScore = Math.floor(Math.random() * 6) + 1
    displayScore.textContent = currentScore
    let currentValue = parseInt(currentPlayer.textContent) 
     if(dice !== 1){
        document.querySelector(`.player__dot-${activePlayer}`).style.opacity = 1
        currentValue += currentScore
        currentPlayer.textContent = currentValue

     } else {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
        currentPlayer.textContent = 0

     }
 

     
  
    //do something
}
function holdgame(){
    //do something
}
function restart(){
    //do something
}
//add all eventlistener
rollDice.addEventListener("click", throwDice)
newGame.addEventListener("click", restart)