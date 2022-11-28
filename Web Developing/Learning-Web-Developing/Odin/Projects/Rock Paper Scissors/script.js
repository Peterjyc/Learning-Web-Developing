function getComputerChoice(){
    let randNumb = Math.random();
    if (randNumb > 2/3){
        return("Rock");
    } else if (randNumb < 1/3){
        return ("Scissors");
    } else {
        return("Paper");
    }
}
// Code to check probability of hands

// let rock = 0
// let paper = 0
// let scissors = 0

// for (let i = 0; i < 100; i++){
//     let checker = getComputerChoice();
//     if (checker == "Rock"){
//         rock += 1;
//         // console.log("Rock = " + rock);
//     } else if (checker == "Paper"){
//         paper += 1;
//         // console.log("Paper = " + paper);
//     } else if (checker == "Scissors"){
//         scissors += 1;
//         // console.log("Scissors = " + scissors);
//     }

// }
// console.log("Rock = " + rock)
// console.log("Paper = " + paper)
// console.log("Scissors = " + scissors)

let choices = document.querySelectorAll('button');
console.log(choices);
let playerCounter = 0;
let compCounter = 0;
let tie = 0;
for (i of choices) {
  i.addEventListener('click', function() {
    let player = this.id;
    let computer = getComputerChoice();
    let result = gamePlay(player, computer);
    if (result == 1){
        playerCounter++;
        msgbox = "You Win!"
    } else if (result == 2){
        compCounter++;
        msgbox = "You Lose :("
    } else if (result == 3){
        tie ++;
        msgbox = "It's a Tie!"
    }

    document.getElementById("result").innerHTML = player;
    document.getElementById("compResult").innerHTML = computer;
    document.getElementById("msgbox").innerHTML = msgbox;
    document.getElementById("playerScore").innerHTML = playerCounter;
    document.getElementById("computerScore").innerHTML = compCounter;
    document.getElementById("tieScore").innerHTML = tie;
});
}





let winCounter = 0;

function gamePlay(playerSelection, computerSelection){

    if (playerSelection == computerSelection){
        // console.log("It's a Tie!")
        return 3;
    }else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        // console.log("You Win!");
        return 1;
    } else if (playerSelection == "Paper" && computerSelection == "Rock"){
        // console.log("You Win!");
        return 1;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        // console.log("You Win!");
        return 1;
    } else {
        // console.log("You Lose!");
        return 2;
    }
}
//console.log(game());

//function game() {
    // let winCounter = 0;
    // let loseCounter = 0;
    // let tieCounter = 0;
    // for (let i = 0; i < 5; i++){
    //     if (gamePlay(player, getComputerChoice()) == 1){
    //         winCounter++;
    //         console.log("Win!");
    //     } else if (gamePlay(player, getComputerChoice()) == 2){
    //         loseCounter++;
    //         console.log("Lose!");
    //     } else {
    //         tieCounter++;
    //         console.log("Tie!");
    //     }
    // }
    // return ("Win = " + winCounter + " Lose = " + loseCounter + " Tie = " + tieCounter);

//}
