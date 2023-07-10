let win = function(p, c) {
    return "You played " + p
    + ". The computer played " + c + ". You Win!";
}

let lose = function(p, c) {
    return "You played " + p 
    + ". The computer played " + c + ". You Lose!";
}

let tie = function(p, c) {
    return "You played " + p
    + ". The computer played " + c + ". You Tie!";
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
        return -1
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


function getPlayerChoice() { 
    input = prompt("Your move (Rock, Paper, Scissors)");

    
    return input.toUpperCase();

}


console.log(playRound(getPlayerChoice(), getComputerChoice(), win, lose, tie))