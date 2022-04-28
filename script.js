let computerPoints = 0;
let humanPoints = 0;
let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let results = document.querySelector("#results");
let points = document.querySelector("#points");

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    
    switch(choice) {
        case 0: choice = "Rock"; break;
        case 1: choice = "Paper"; break;
        case 2: choice = "Scissors"; break;
    }
    return choice;
}
function playRound(computer, human) {
    if (computer === human) {
        results.textContent = "It's a tie. " + computer + " and " + human;
    }
    else if ((computer === "Rock" && human === "Scissors") || 
             (computer === "Paper" && human === "Rock") || 
             (computer === "Scissors" && human === "Paper")) {
                 computerPoints++;
                 results.textContent = "Computer wins. " + computer + " beats " + human + ".";
             }
    else {
        humanPoints++;
        results.textContent = "You win. " + human + " beats " + computer + ".";
    }
    points.innerText = "Point Counts:" + "\nComputer: " + computerPoints + "\n   You: " + humanPoints
    checkPoints(computerPoints, humanPoints);
} 
function game() {
    rockButton.addEventListener('click', function (e) {
        computerChoice = computerPlay();
        playRound(computerChoice, 'Rock');
    });
    paperButton.addEventListener('click', function (e) {
        computerChoice = computerPlay();
        playRound(computerChoice, 'Paper');
    });
    scissorsButton.addEventListener('click', function (e) {
        computerChoice = computerPlay();
        playRound(computerChoice, 'Scissors')
    })
}
function checkPoints (computerPoints, humanPoints) {
    if (computerPoints == 5 || humanPoints == 5) {
        if (computerPoints === 5) {
            results.textContent = "Game Over! Computer is the final winner."
        }
        else {
            results.textContent = "Game Over! You are the final winner."
        }
        points.textContent = ""
    }
}
game();

