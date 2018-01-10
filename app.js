     
        /****************************
        *         GAME LOGIC        * 
        ****************************/

    // Players take turns to roll the dice
    // The player who reaches a score of 25 is the winner.

// Initializations
let score, roundScore, activePlayer;

score = [0,0];
roundScore = 0;
activePlayer = 0;

var x = document.querySelector('#score-0').textContent;
console.log(x);

document.querySelector('.dice').style.display = 'none';

// let player = document.querySelector('#current-' + activePlayer);


document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. Roll the Dice
   dice = Math.floor(Math.random() * 6 + 1);

    //2. Display the result
    const diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'assets/dice-' + dice + '.png';

    //3. Update thr round score IF the rolled number was not 1
    if(dice !== 1){
        roundScore += dice;
        score[0] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = roundScore;
    console.log(roundScore);
    }
});

// init();
// play();
// newGame();
// console.log(dice);

// function newGame() {
//     document.getElementById('new-game').addEventListener("click", init);
// }

// function play() {
//     document.getElementById('diceRoll').addEventListener("click", function() {
//         // update player score
//         current1.textContent = dice;
//         roundScore += dice;
//         console.log(roundScore);
//     });
// }
 
// function init() {
//     score = [0,0];
//     roundScore = 0;
//     activePlayer = 0;

//     // Reset player score card.
//     player1Score.textContent = 0;
//     player2Score.textContent = 0;

//     // Reset current score card.
//     current0.textContent = 0;
//     current1.textContent = 0;
// }