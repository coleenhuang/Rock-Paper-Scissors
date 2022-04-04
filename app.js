const optionsArray = ["rock", "paper", "scissors"]
function computerPlay(myArray) {
    return myArray[Math.floor(Math.random()* myArray.length)]
}
console.log(computerPlay(optionsArray))

