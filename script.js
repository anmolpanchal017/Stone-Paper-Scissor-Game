let userScore = 0;
let computerScore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you Win! your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `you lose! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //generate computer choice
    const computerChoice = genComputerChoice();

    if(userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // scissor, paper
            userWin = computerChoice === "paper" ? false : true;
        } else if(userChoice ==="paper") {
            //rock, scissor
            userWin = computerChoice === "scissors" ? false : true;

        } else { 
            //rock, paper
            userWin = computerChoice === "rock" ? false : true;
        } 
        showWinner(userWin, userChoice, computerChoice);
    }
}

choice.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});