"use strict";
const computerScore= document.getElementById("computer-score");
const userScore= document.getElementById("user-score");

let cScore=0;
let pScore=0;

let resultMessage = '';

const gameStartContainer = document.getElementById("game-start");
const gameResultContainer = document.getElementById("game-result");

const hands= document.querySelector('.hands');

const btnGameStart = document.getElementById("btn-game-start");

const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
const result = document.getElementById('result');

// Game Start Function
const gameStart= function(){
    computerScore.innerText = cScore;
    userScore.innerText = pScore;
    
    gameResultContainer.classList.remove("hidden");
    gameStartContainer.classList.add("hidden");

    hands.classList.remove('hidden');
};

const gameLogic = function (userSelected, computerSelected){
    if(userSelected== computerSelected){
        resultMessage = 'DRAW'
        updateDom(userSelected, computerSelected, resultMessage);
        return;
    }
    if(userSelected=== 'rock'){
        if(computerSelected === 'paper'){
            cScore++;
            resultMessage= 'YOU LOSE';
            updateDom(userSelected, computerSelected, resultMessage);
            return
        }else{
            pScore++;
            resultMessage= 'YOU WON';
            updateDom(userSelected, computerSelected, resultMessage);
            return
        }
    }

    if(userSelected=== 'paper'){
        if(computerSelected === 'scissors'){
            cScore++;
            resultMessage= 'YOU LOSE';
            updateDom(userSelected, computerSelected, resultMessage);
            return
        }else{
            pScore++;
            resultMessage= 'YOU WON';
            updateDom(userSelected, computerSelected, resultMessage);
            return
        }
    }

    if(userSelected=== 'scissors'){
        if(computerSelected === 'rock'){
            cScore++;
            resultMessage= 'YOU LOSE';
            updateDom(userSelected, computerSelected, resultMessage);
            return
        }else{
            pScore++;
            resultMessage= 'YOU WON';
            updateDom(userSelected, computerSelected, resultMessage);
            return
        }
    }
}

// updateDOM
const updateDom = function(userSelected, computerSelected, resultMessage){
    computerScore.innerText = cScore;
    userScore.innerText = pScore;
    computerChoice.innerHTML = `Computer Choose <strong>${computerSelected.toUpperCase()}</strong>`;
    userChoice.innerHTML = `You Choose <strong>${userSelected.toUpperCase()}</strong>`;
    result.innerText= resultMessage;

}

const check = function (input) {
    const userSelected = input;
    const choices=['rock','paper','scissors'];
    const num = Math.trunc(Math.random()*3);

    const computerSelected = choices[num];

// calling gameLogic function
    gameLogic(userSelected, computerSelected);
};

// Event Listeners
btnGameStart.addEventListener("click", gameStart);

// Calling function

