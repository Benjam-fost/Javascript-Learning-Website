const choices = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
let playerScore = 0, computerScore = 0;

function play(choice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = "";

    if(choice === computerChoice){
        result = "Its a tie!";
    }
    else{
        switch(choice){
            case "rock":
                result = (computerChoice === "scissors") ? "You win!" : "You lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win!" : "You lose!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You win!" : "You lose!";
                break;
        }
    }
    playerDisplay.textContent = `Player: ${choice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "You win!":
            playerScoreDisplay.textContent = ++playerScore
            resultDisplay.classList.add("greenText");
            break;
        case "You lose!":
            computerScoreDisplay.textContent = ++computerScore
            resultDisplay.classList.add("redText");

    }
}