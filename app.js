const optionsArray = ["rock", "paper", "scissors"]
let playerSelection = 'rock';
let computerSelection;


function computerPlay(myArray) {
    return myArray[Math.floor(Math.random()* myArray.length)]
}

function playRound (playerSelection, computerSelection) {
    //Compares computer and player input to see who wins each round
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






function game(){
    //Keeps score and calculates who wins or loses
    for(let i = 0; i<5; i++) {
        console.log(playRound(playerSelection, computerSelection))
    }
}

game();
