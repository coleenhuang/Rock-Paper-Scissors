const optionsArray = ["rock", "paper", "scissors"]
let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
const buttonList = document.querySelectorAll('.button');
const computerScoreDisplay = document.querySelector('#computer-score')
const playerScoreDisplay = document.querySelector('#player-score')

function computerPlay(myArray) {
    return myArray[Math.floor(Math.random()* myArray.length)]
}

function playRound (playerSelection, computerSelection) {
    //Compares computer and player input to see who wins each round
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay(optionsArray).toLowerCase();
    console.log('player', playerSelection, 'computer', computerSelection)
    if (playerSelection == computerSelection) {
        return "Tie"
    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')
    ){
        computerScore += 1
        return 'Computer wins'
    }
    else {
        playerScore += 1
        return "You win"
    }
}


function game(){
    //Keeps score and calculates who wins or loses
    buttonList.forEach(button => {
        button.addEventListener('click', function(){
                playRound(this.id, computerSelection)
                console.log('player', playerScore, 'computer', computerScore)
                displayScore()
        })
   })
    

    if (playerScore === computerScore) {
        console.log(' Looks like this was a tie')
    }
    else if (computerScore > playerScore) {
        console.log('The computer won!')
    }
    else {
        console.log('Congrats! You won!')
    }
}

function displayScore() {
    computerScoreDisplay.textContent = computerScore;
    playerScoreDisplay.textContent = playerScore;
}

game();
