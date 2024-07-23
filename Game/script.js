let user = 0;
let com = 0;
const choices = document.querySelectorAll(".choice");

const result = (userChoice, comChoice) => {
    let resultText;
    
    if (userChoice === comChoice) {
        resultText = "It's a tie!";
    } else if (
        (userChoice === "rock" && comChoice === "scissors") ||
        (userChoice === "paper" && comChoice === "rock") ||
        (userChoice === "scissors" && comChoice === "paper")
    ) {
        resultText = "You win!";
        user++;
    } else {
        resultText = "Computer wins!";
        com++;
    }
    
    // Display result
    document.querySelector("#result").textContent = resultText;
    document.querySelector("#user-score").textContent = user;
    document.querySelector("#com-score").textContent = com;
};

const play = (userChoice) => {
    const arr = ["rock", "paper", "scissors"];
    const ind = Math.floor(Math.random() * 3);
    const comChoice = arr[ind];
    result(userChoice, comChoice);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        play(userChoice);
    });
});


const reset = document.querySelector("#reset"); 
reset.addEventListener("click", () => {
    user = 0;
    com = 0;
    document.querySelector("#user-score").textContent = user;
    document.querySelector("#com-score").textContent = com;
    document.querySelector("#result").textContent = "Play Game"; 
});
