function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    
    switch(choice) {
        case 0: choice = "Rock"; break;
        case 1: choice = "Paper"; break;
        case 2: choice = "Scissors"; break;
    }
    return choice;
}
function capitalize(word) {
    return word[0].toUpperCase() + word.substring(1);
}
function playRound(computer, human) {
    human = capitalize(human);
    if (computer === human) {
        return "It's a tie. " + computer + " and " + human;
    }
    else if ((computer === "Rock" && human === "Scissors") || 
             (computer === "Paper" && human === "Rock") || 
             (computer === "Scissors" && human === "Paper")) {
                 return "Computer wins. " + computer + " beats " + human + ".";
             }
    else {
        return "You win. " + human + " beats " + computer + ".";
    }

}

computerChoice = computerPlay();
playerChoice = (prompt("Rock, paper, or scissors?")).toLowerCase();
console.log(playRound(computerChoice, playerChoice));


