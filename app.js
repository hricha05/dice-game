     
        /*****************************
        *                           *
        *         GAME LOGIC        *
        *                           *
        *****************************/

    // Players take turns to roll the dice
    // The player who reaches a score of 25 is the winner.

// Initializations
let score, roundScore, activePlayer;

const player1Score = document.getElementById('player-0-score');
const player2Score = document.getElementById('player-1-score');

const current0 = document.getElementById('current-0');
const current1 = document.getElementById('current-1');



init();

console.log(dice());

function dice() {
    const dice = Math.floor(Math.random() * 6 + 1);
    return dice;
    console.log(dice);
}

function init() {
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;

    // Reset player score card.
    player1Score.textContent = 0;
    player2Score.textContent = 0;

    // Reset current score card.
    current0.textContent = 0;
    current1.textContent = 0;
}