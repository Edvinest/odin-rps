//TODO: Complete remaining tasks

function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) return "Tie!"
    else if (computerSelection == "paper" && playerSelection == "rock" ||
        computerSelection == "scissors" && playerSelection == "paper" ||
        computerSelection == "rock" && playerSelection == "scissors") result.textContent = "Computer wins this round!"
    else result.textContent = "Player wins this round!"
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}

const container = document.querySelector('#container')
const result = document.querySelector('#result')

const btnRock = document.createElement('button')
const btnScissors = document.createElement('button')
const btnPaper = document.createElement('button')

btnRock.textContent = "Rock"
btnPaper.textContent = "Paper"
btnScissors.textContent = "Scissors"

container.append(btnRock, btnPaper, btnScissors)

const buttons = document.querySelectorAll('#container button')

buttons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.textContent, getComputerChoice))
})