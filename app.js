//declare variables
var systemAnswer = ["Rock","Paper","Scissor"];
var userScore = 0;
var systemScore = 0;
var totalAttempts = 0;

var UsrPlyrContainer = document.getElementById("UsrPlyrContainer");
var scoreBoardOne = document.getElementById("scoreBoardOne");
var scoreBoardTwo = document.getElementById("scoreBoardTwo");
var compPlyrContainer = document.getElementById("compPlyrContainer");
//displays game elements
function startGame() {
    document.getElementById("userRock").style.backgroundColor = "silver";
    document.getElementById("userPaper").style.backgroundColor = "silver";
    document.getElementById("userScissors").style.backgroundColor = "silver";
    document.getElementById("sysScissors").style.color = "black";
    document.getElementById("sysPaper").style.color = "black";
    document.getElementById("sysRock").style.color = "black";

    UsrPlyrContainer.style.display = "flex";
    scoreBoardOne.style.display = "flex";
    scoreBoardTwo.style.display = "flex";
    compPlyrContainer.style.display = "flex";
    document.getElementById("playBtn").innerHTML = "Reset Game";
    userScore = 0;
    systemScore = 0;
    totalAttempts = 0;
    document.getElementById("plyrScore").innerHTML = "Player: " + userScore;
    document.getElementById("sysScore").innerHTML = "Computer: " + systemScore;
    document.getElementById("systemResponse").innerHTML = "First to 10 points, wins!";
}
/*When user selects rock changes user 
answer & generates random system answer
adds score to winner*/
function playRock() {
    document.getElementById("userRock").style.backgroundColor = "green";
    document.getElementById("userPaper").style.backgroundColor = "silver";
    document.getElementById("userScissors").style.backgroundColor = "silver";
    document.getElementById("sysScissors").style.color = "black";
    document.getElementById("sysPaper").style.color = "black";
    document.getElementById("sysRock").style.color = "black";
    //generate system answer
    let y = Math.floor((Math.random() * 3));
    y = systemAnswer[y];
    //if scissors user wins a point
    if (y == "Scissor") {
        userScore++;
        document.getElementById("systemResponse").innerHTML = "Rock smashes scissors!";
        document.getElementById("plyrScore").innerHTML = "Player: " + userScore;
        document.getElementById("sysScissors").style.color = "#00b64f";
    }
    //if paper systems wins a point
    else if (y == "Paper") {
        systemScore++;
        document.getElementById("systemResponse").innerHTML = "Paper smothers rock!";
        document.getElementById("sysScore").innerHTML = "Computer: " + systemScore;
        document.getElementById("sysPaper").style.color = "#00b64f";
    }
    //if rock it's a tie
    else {
        document.getElementById("systemResponse").innerHTML = "Rock against Rock. It's a tie!";
        document.getElementById("sysRock").style.color = "#00b64f";
    }
    //check to see if user or system has 10 points
    if (userScore == 10) {
        totalAttempts++
        alert("You win!! You chopped up the competition to shreds in " + totalAttempts + " grueling rounds!!");
        startGame();
    } else if (systemScore == 10) {
        totalAttempts++
        alert("You suuuuck! Your scissors couldn't hold the edge in just " + totalAttempts + " epic rounds!!");
        startGame();
    } else {
        totalAttempts++;
        console.log("There are " + totalAttempts + " total rounds");
    }
}


function playPaper() {
    document.getElementById("userRock").style.backgroundColor = "silver";
    document.getElementById("userPaper").style.backgroundColor = "green";
    document.getElementById("userScissors").style.backgroundColor = "silver";
    document.getElementById("sysScissors").style.color = "black";
    document.getElementById("sysPaper").style.color = "black";
    document.getElementById("sysRock").style.color = "black";
    //generate system answer
    let y = Math.floor((Math.random() * 3));
    y = systemAnswer[y];
    //if scissors system wins
    if (y == "Scissor") {
        systemScore++;
        document.getElementById("systemResponse").innerHTML = "Scissors shread paper!";
        document.getElementById("sysScore").innerHTML = "Computer: " + systemScore;
        document.getElementById("sysScissors").style.color = "#00b64f";
    }
    //if rock user wins
    else if (y == "Rock") {
        userScore++;
        document.getElementById("systemResponse").innerHTML = "Paper smothers rock!";
        document.getElementById("plyrScore").innerHTML = "Player: " + userScore;
        document.getElementById("sysRock").style.color = "#00b64f";
    }
    //if paper
    else {
        document.getElementById("systemResponse").innerHTML = "Paper against paper. It's a tie!";
        document.getElementById("sysPaper").style.color = "#00b64f";
    }
    //check to see if user or system has 10 points
    if (userScore == 10) {
        totalAttempts++
        alert("You win!! You chopped up the competition to shreds in " + totalAttempts + " grueling rounds!!");
        startGame();
    } else if (systemScore == 10) {
        totalAttempts++
        alert("You suuuuck! Your scissors couldn't hold the edge in just " + totalAttempts + " epic rounds!!");
        startGame();
    } else {
        totalAttempts++;
        console.log("There are " + totalAttempts + " total rounds");
    }
}
function playScissors() {
    document.getElementById("userRock").style.backgroundColor = "silver";
    document.getElementById("userPaper").style.backgroundColor = "silver";
    document.getElementById("userScissors").style.backgroundColor = "green";
    document.getElementById("sysScissors").style.color = "black";
    document.getElementById("sysPaper").style.color = "black";
    document.getElementById("sysRock").style.color = "black";
    //generate system answer
    let y = Math.floor((Math.random() * 3));
    y = systemAnswer[y];
    //if rock system wins
    if (y == "Rock") {
        systemScore++;
        document.getElementById("systemResponse").innerHTML = "Rock smashes scissors!";
        document.getElementById("sysScore").innerHTML = "Computer: " + systemScore;
        document.getElementById("sysRock").style.color = "#00b64f";
    }
    //if paper user wins
    else if (y == "Paper") {
        userScore++;
        document.getElementById("systemResponse").innerHTML = "Scissors shread paper!";
        document.getElementById("plyrScore").innerHTML = "Player: " + userScore;
        document.getElementById("sysPaper").style.color = "#00b64f";
    }
    //if scissors
    else {
        document.getElementById("systemResponse").innerHTML = "Scissors against scissors. It's a tie!";
        document.getElementById("sysScissors").style.color = "#00b64f";
    }
    //check to see if user or system has 10 points
    if (userScore == 10) {
        totalAttempts++
        alert("You win!! You chopped up the competition to shreds in " + totalAttempts + " grueling rounds!!");
        startGame();
    } else if (systemScore == 10) {
        totalAttempts++
        alert("You suuuuck! Your scissors couldn't hold the edge in just " + totalAttempts + " epic rounds!!");
        startGame();
    } else {
        totalAttempts++;
        console.log("There are " + totalAttempts + " total rounds");
    }
}