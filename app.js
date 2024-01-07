let randomNumber = parseInt((Math.random()*100 +1));

let submit = document.querySelector("#subt");
let userInput = document.querySelector("#guessField");
let guessSlot = document.querySelector(".guesses");
let remaining = document .querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let startOver = document.querySelector(".resultParas"); 


let p = document.createElement("p");
let playGame = true
let prevGuess = [];
let numGuess = 1;

if(playGame){
    submit.addEventListener('click',function (e){
        e.preventDefault();
        let guess = parseInt(userInput.value);

        validateGuess(guess)
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert = "please enter a valid number"
    } else if(guess < 1){
        alert = "please enter a number greater than 1"
    } else if(guess > 100){
        alert = "Please ener a number lesser than 100"
    } else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over! The random number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Congratulation! you guessed it right`);
        endGame();
    } else if(guess < randomNumber){
        displayMessage(`Guess is Toooo low`)
    } else if(guess > randomNumber){
        displayMessage(`guess is Toooo high`)
    }

}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;

}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}



function endGame(){
    userInput.value = '';
    userInput.setAttribute("disabled",'');
    p.classList.add("button");
    p.innerHTML = `<h1 id ="newGame">Start new Game</h1>`
    startOver.appendChild(p);
    playGame = false;
    newGame();

}


function newGame(){
    let btn = document.querySelector(".button");
    btn.addEventListener("click", function(){
       randomNumber = parseInt((Math.random()*100 +1));
       prevGuess = [];
       numGuess = 1;
        guessSlot.innerHTML = ``
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute("disabled");
        startOver.removeChild(p)
        playGame = true;
    })

}