let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")


const user = document.querySelector("#user");
const computer = document.querySelector("#computer");

const generate = () => {
    let options = ["rock" , "paper" , "scissors"];
    let pos = Math.floor(Math.random() * 3);
    return options[pos];
    
}
const draw = () => {
    msg.innerText = "Draw!"
    msg.style.backgroundColor = "#2A1A1F";
    console.log("No Winner")
}
const result = (winner, compChoice, userChoice) => {
    if(winner)
    {
        userScore++;
        user.innerText = userScore;
        msg.innerText = `You Won :) ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "Green";
    }
    else {
        compScore++;
        computer.innerText = compScore;
        msg.innerText = `You Lost :( ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="Red";
    }
}
const play = (userChoice) => {
 
    let compChoice = generate();
    if(userChoice == compChoice)
    {
        draw();
    }
   else {
    let winner = true;
    if(userChoice == "rock")
    {
        winner = compChoice === "paper" ? false : true;
    }
    else if(userChoice == "paper")
    {
        winner = compChoice === "scissors" ? false : true;
    }
    else {
        winner = compChoice === "rock" ? false : true;
    }
    result(winner,compChoice,userChoice);
   }
}
choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        let getId = choice.getAttribute("id");
        play(getId);
    })
})
