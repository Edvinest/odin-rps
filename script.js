function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) return "Tie!";
    else if (computerSelection == "paper" && playerSelection == "rock" ||
        computerSelection == "scissors" && playerSelection == "paper" ||
        computerSelection == "rock" && playerSelection == "scissors") {
        result.textContent = "Computer wins this round!";
        computerScore++;
    }

    else {
        result.textContent = "Player wins this round!";
        playerScore++;
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineVictor(){
    if(playerScore === 5){
        finalWinner("Player")
    }
    else if (computerScore === 5){
        finalWinner("Computer")
    }
}

function finalWinner(winner){
    result.textContent = `${winner} won 5 rounds!`;
    buttons.forEach(button => {
        button.setAttribute("disabled", "true")
    })

    setTimeout(resetGame, 5000)
}

function resetGame(){
    buttons.forEach(button => button.removeAttribute("disabled"));
    result.textContent = "";
    playerScore = 0;
    computerScore = 0;
}

let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('#container');
const result = document.querySelector('#result');

const btnRock = document.createElement('button');
const btnScissors = document.createElement('button');
const btnPaper = document.createElement('button');

btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";

container.append(btnRock, btnPaper, btnScissors);

const buttons = document.querySelectorAll('#container button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.textContent.toLowerCase(), getComputerChoice());
        determineVictor()
    })})