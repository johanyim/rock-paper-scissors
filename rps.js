const buttons = document.querySelectorAll('.btn')

let win = function(p, c) {
    console.log("You played " + p
    + ". The computer played " + c + ". You Win!");
    return [1,0]
}

let lose = function(p, c) {
    console.log("You played " + p 
    + ". The computer played " + c + ". You Lose!");
    return [0,1]
}

let tie = function(p, c) {
    console.log("You played " + p
    + ". The computer played " + c + ". You Tie!");
    return [0,0]
}

function playRound(playerSelection, computerSelection, 
    win, lose, tie) {
    
    const moveMap = new Map([
        ["rock",0],
        ["paper",1],
        ["scissors", 2]
    ])

    const outcome = [
        [ tie,lose, win], 
        [ win, tie,lose], 
        [lose, win, tie]
    ]

    //unrecognized
    if(!moveMap.has(playerSelection.toLowerCase())) {
        console.log("unexpected outcome")
        return [0,0]
    }
    
    let p = moveMap.get(playerSelection.toLowerCase());
    let c = moveMap.get(computerSelection.toLowerCase());

    return outcome[p][c](playerSelection.toLowerCase(),computerSelection.toLowerCase())
}

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0 : return "Rock";
        case 1 : return "Paper";
        case 2 : return "Scissors";
    }
}




buttons.forEach((button)=>{

    button.addEventListener('click',()=>{
        let playerChoice = button.id;
        let computerChoice = getComputerChoice();
        
        playRound(playerChoice, computerChoice, win,lose,tie);

    })

})


// function getPlayerChoice() { 
//     input = prompt("Your move (Rock, Paper, Scissors)");

    
//     return input.toUpperCase();

// }

// const timeout = async ms => new Promise(res => setTimeout(res, ms));
// let next = false; // this is to be changed on user input

// async function waitUserInput() {
//     while (next === false) await timeout(50); // pauses script
//     next = false; // reset var
// }


// function play(move) {
//     console.log("Played " + move)
    
// }




score = [0,0]

async function game() {
    let score = [0,0];
    do {
        
        // outcome = await playRound(getPlayerChoice(), getComputerChoice(), win, lose, tie)
        // // vector addition operation
        // score[0] += outcome[0];
        // score[1] += outcome[1];

        // console.log("SCORE:", score)
        // console.log("game has ended");

        // console.log(score)

        
    } while(score[0] < 1 && score[1] < 1);


    game()
    return score;
    
}

// console.log(playRound(getPlayerChoice(), getComputerChoice(), win, lose, tie))

// console.log([3,4] + [5,6])
