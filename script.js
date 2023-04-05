function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) return "Tie!"
    else if (computerSelection == "paper" && playerSelection == "rock" ||
        computerSelection == "scissors" && playerSelection == "paper" ||
        computerSelection == "rock" && playerSelection == "scissors") return "Computer wins this round!"
    else return "Player wins this round!"
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}

window.onload = function game() {
    for (let index = 0; index < 5; index++) {
        const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase()
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    }
}