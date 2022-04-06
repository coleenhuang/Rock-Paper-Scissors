const optionsArray = ["rock", "paper", "scissors"]
let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
const buttonList = document.querySelectorAll('.button');
const computerScoreDisplay = document.querySelector('#computer-score');
const playerScoreDisplay = document.querySelector('#player-score');
const resultText = document.querySelector('.result p');
const resultBox = document.querySelector('.result');
const resetButton = document.querySelector('#reset');

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
                displayScore();
                displayResults();
        })
   })
   
   resetButton.onclick = () => {
       console.log('reset');
       resetGame();
    };
    
}

function displayScore() {
    computerScoreDisplay.textContent = computerScore;
    playerScoreDisplay.textContent = playerScore;
}

function displayResults() {
    // Calculates who wins or loses game once round 3 is reached
    //Displays the result of the game
    if (computerScore == 3 || playerScore == 3) {
        resultBox.classList.remove("hidden")
        if (computerScore > playerScore) {
            resultText.append("The computer won")
        }
        else {
            resultText.append("You won")
        }
   }

}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    displayScore();
    resultText.innerHTML = '';
    resultBox.classList.add('hidden');
    
}

game();
