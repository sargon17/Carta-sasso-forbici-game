/*jshint esversion: 6 */

let cartaBtn = document.querySelector("#Carta__btn");
let sassoBtn = document.querySelector("#Sasso__btn");
let forbiciBtn = document.querySelector("#Forbici__btn");
let playerStatusSign = document.querySelector("#player__status");
let computerChoice = document.querySelector("#computer__choice");
let humanChoice = document.querySelector("#human__choice");
let computerCounter = document.querySelector("#computer__counter");
let playerCounter = document.querySelector("#player__counter");
let gameStoryList = document.querySelector("#game__story__lists");
let betterOfThreeButton = document.querySelector("#btrOfThree");
let resultDisplaySection = document.querySelector(".win_loss_result");
let restartButton = document.querySelector("#restart__button")
let endGameButton = document.querySelector("#end__game");

 computerPoints = 0;
 humanPoints = 0;
 gameCounter = 0;

let betterOfThree = false;

function cartaSassoForbici(selection) {
    let compSelection = ["carta","sasso","forbici"];
    let randSelection = compSelection[Math.floor(Math.random() * 3)];
    console.log("computer choice: " + randSelection)
    let playerStatus = "";
    if(selection === "carta"){
        if(randSelection === "carta"){
            playerStatus = "pareggiato";
        } else if(randSelection === "forbici"){
            playerStatus = "perso";
        } else {
            playerStatus = "vinto";
        }
    } else if(selection === "sasso"){
        if(randSelection === "sasso"){
            playerStatus = "pareggiato";
        } else if(randSelection === "carta"){
            playerStatus = "perso";
        } else {
            playerStatus = "vinto";
        }
    } else if(selection === "forbici"){
        if(randSelection === "forbici"){
            playerStatus = "pareggiato";
        } else if(randSelection === "sasso"){
            playerStatus = "perso";
        } else {
            playerStatus = "vinto";
        }
    }
    gameCounter++;
    console.log(playerStatus);
    resultDisplay(playerStatus,randSelection,selection);
    counterUpdate(playerStatus);
    updateStoryList(playerStatus, randSelection, selection, computerPoints, humanPoints);

    if(betterOfThree){
        if(gameCounter === 3){
            winnerChecker(humanPoints,computerPoints);
        }
    }

}


function resultDisplay(playerStat,computer,human){
    playerStatusSign.innerHTML = "Hai " + playerStat;
    computerChoice.innerHTML = "computer: " + computer;
    humanChoice.innerHTML = "human: " + human;
};

function counterUpdate(playerStat){
    if(playerStat === "vinto"){
        humanPoints++;
        playerCounter.innerHTML = humanPoints;
    } else if (playerStat === "perso"){
        computerPoints++
        computerCounter.innerHTML = computerPoints;
    };
;}

function counterReset(){
    gameCounter = 0;
    humanPoints = 0;
    computerPoints = 0;
    playerCounter.innerHTML = humanPoints;
    computerCounter.innerHTML = computerPoints;
}


function updateStoryList(playerStat,computerChoice,humanChoice,computerPoints,humanPoints){
    let newRow = document.createElement("li");
    let newDiv = document.createElement("div");
    let result = document.createElement("p");
    let points = document.createElement("p");
    let resultString = document.createElement("p");

    newRow.setAttribute("class","game__story");
    newDiv.setAttribute("class","game__results");
    newDiv.classList.add("center");
    result.innerHTML = `Hai ${playerStat}`;
    result.classList.add("bold");
    points.innerHTML = `${computerPoints} : ${humanPoints}`;
    resultString.innerHTML = `Computer: <strong>${computerChoice}</strong> human: <strong>${humanChoice}</strong>`;


    if(playerStat === "vinto"){
        result.classList.add("green__victory");
    } else if(playerStat === "perso"){
        result.classList.add("red__lost");
    } else{
        result.classList.add("grey__draw")
    };

    newRow.append(newDiv);
    newDiv.append(result);
    newDiv.append(points);
    newRow.append(resultString)

    gameStoryList.prepend(newRow);
};

function winnerChecker(playerPoints,computerPoints){
    if(playerPoints > computerPoints){
        showResult("vinto",computerPoints,playerPoints);
    } else if(playerPoints < computerPoints){
        showResult("perso",computerPoints,playerPoints);
    } else {
        showResult("pareggiato",computerPoints,playerPoints);
    };

};


function showResult(playerStat,computerPoints,playerPoints){
    document.querySelector("#text_result").innerHTML = `Hai ${playerStat}`;
    document.querySelector("#number_result").innerHTML = `${computerPoints} : ${playerPoints}`;
    resultDisplaySection.classList.remove("undisplay");
}


function checkBtn(){
    if(betterOfThree){
        betterOfThreeButton.classList.add("in__game");
    } else{
        betterOfThreeButton.classList.remove("in__game");
    }
};

function endGame(playerPoints,computerPoints){
    winnerChecker(playerPoints,computerPoints);
}





cartaBtn.addEventListener("click", ()=> {cartaSassoForbici("carta")});
sassoBtn.addEventListener("click", ()=> {cartaSassoForbici("sasso")});
forbiciBtn.addEventListener("click", ()=> {cartaSassoForbici("forbici")});
betterOfThreeButton.addEventListener("click", () => {
    if(betterOfThree === true){
        betterOfThree = false;
    } else {
        betterOfThree = true;
    }
    checkBtn();
    counterReset();
});
restartButton.addEventListener("click", () => {
    resultDisplaySection.classList.add("undisplay");
    counterReset();
});
endGameButton.addEventListener("click", () => {
    endGame(humanPoints,computerPoints);
});