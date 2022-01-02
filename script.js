let cartaBtn = document.querySelector("#Carta__btn");
let sassoBtn = document.querySelector("#Sasso__btn");
let forbiciBtn = document.querySelector("#Forbici__btn");
let playerStatusSign = document.querySelector("#player__status");
let computerChoice = document.querySelector("#computer__choice");
let humanChoice = document.querySelector("#human__choice");


let computerPoints = 0;
let humanPoints = 0;


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
    console.log(playerStatus)
    resultDisplay(playerStatus,randSelection,selection);
    
}


function resultDisplay(playerStat,computer,human){
    playerStatusSign.innerHTML = "Hai " + playerStat;
    computerChoice.innerHTML = "computer: " + computer;
    humanChoice.innerHTML = "human: " + human;
}

function counterUpdate(playerStat){
    if(playerStat === "vinto"){
        humanPoints++
    } else if (playerStat === "perso"){
        computerPoints++
    }
    console.log(computerPoints);
    console.log(humanPoints)
}






cartaBtn.addEventListener("click", ()=> {cartaSassoForbici("carta")});
sassoBtn.addEventListener("click", ()=> {cartaSassoForbici("sasso")});
forbiciBtn.addEventListener("click", ()=> {cartaSassoForbici("forbici")});