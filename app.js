var userChoice = document.querySelectorAll(".choice img")
var comChoice = document.querySelector(".comChoice")
var winPossibility = document.querySelector(".winPossibility")
var userScore = document.querySelector("#user-score")
var comScore = document.querySelector("#computer-score")

var comTurn

var winUser = 0
var winCom = 0

userChoice.forEach((ele, i) => {
    ele.addEventListener("click", (e) => {
        var userTurn = e.target.dataset.choice
        getRand()
        if (comTurn == 0) {
            comTurn = "Rock"
            comChoice.innerHTML = `Comp selected <img src="./images/${comTurn}.png">`
        } else if (comTurn == 1) {
            comTurn = "Paper"
            comChoice.innerHTML = `Comp selected <img src="./images/${comTurn}.png">`
        } else if (comTurn == 2) {
            comTurn = "Scissor"
            comChoice.innerHTML = `Comp selected <img src="./images/${comTurn}.png">`
        }

        if (userTurn == comTurn) {
            winPossibility.innerHTML = "Draw"
        } else if ((userTurn == 'Rock' && comTurn == 'Scissor') || (userTurn == 'Paper' && comTurn == 'Rock')) {
            winUser += 1
            winPossibility.innerHTML = "You Won!"
            userScore.innerHTML = winUser
        } else {
            winCom += 1
            winPossibility.innerHTML = "You Lost!"
            comScore.innerHTML = winCom
        }
    })
})

function getRand() {
    comTurn = Math.floor(Math.random() * 3)
}