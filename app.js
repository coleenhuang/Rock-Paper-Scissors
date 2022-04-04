const optionsArray = ["rock", "paper", "scissors"]
let playerSelection = 'rock';
let computerSelection;

function computerPlay(myArray) {
    return myArray[Math.floor(Math.random()* myArray.length)]
}

function playRound (playerSelection, computerSelection) {
    //Compares computer and player input to see who wins
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay(optionsArray).toLowerCase();
    console.log(computerSelection)
    if (playerSelection == computerSelection) {
        return "Tie"
    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissor') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')
    ){
        return 'Computer wins'
    }
    else {
        return "You win"
    }
}



console.log(playRound(playerSelection, computerSelection))


function game(){
    //Keeps score and calculates who wins or loses
    //call playRound function within this function
}

