computerPoints = 0;
humanPoints = 0;

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
                 computerPoints++;
                 return "Computer wins. " + computer + " beats " + human + ".";
             }
    else {
        humanPoints++;
        return "You win. " + human + " beats " + computer + ".";
    }
}
function game() {
    for (let i = 0; i < 5; i++) {
        computerChoice = computerPlay();
        playerChoice = (prompt("Rock, paper, or scissors?")).toLowerCase();
        console.log(playRound(computerChoice, playerChoice));
    }
    console.log("Point Counts:" + "\n\tComputer: " + computerPoints + "\n\tYou: " + humanPoints)
}

game();



