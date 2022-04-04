const optionsArray = ["rock", "paper", "scissors"]
function computerPlay(myArray) {
    return myArray[Math.floor(Math.random()* myArray.length)]
}

function playRound (playerSelection, computerSelection) {
    //Compares computer and player input to see who wins
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
const playerSelection = "rock";
const computerSelection = computerPlay(optionsArray);
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))


function game(){
    //Keeps score and calculates who wins or loses
    //call playRound function within this function
}

