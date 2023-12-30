let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');    

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const drawGame = () => {
    console.log("draw game");
    msg.innerText = "draw game!";
    msg.style.backgroundColor = "black";
}
const userWinner = (userWin) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("user wins");
        msg.innerText = "you win!";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("user loses");
        msg.innerText = "you lose!";
        msg.style.backgroundColor = "red";
    }
}

const computerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const playGame = (userChoice) => {
    console.log("user choice is", userChoice);
    // generate computer choice
    const compChoice = computerChoice();
    console.log("computer choice is", compChoice);

    if (userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice==="rock"){
            //scissors,paper
            userWin = compChoice==="paper" ? false: true;
        }
        else if (userChoice==="paper"){
            //scissors, rock
            userWin = compChoice==="scissors" ? false: true;
        }
        else{
            //rock, paper
            userWin = compChoice==="rock" ? false: true;
        }
        userWinner(userWin);
    }
}



choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked: ", userChoice);
        playGame(userChoice);
    });
})