/*You can use Math.random() and Math.floor() to help you get a random whole number.
This will represent the index number for the options array.
You can use the random index to access the option from the options array.*/

function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const rndInt = Math.floor(Math.random() * options.length)
    return options[rndInt];

}

console.log(getRandomComputerResult());