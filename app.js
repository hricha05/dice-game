/****************************
 *      GAME LOGIC          *
 ****************************/

// Players take turns to roll the dice
// The player who reaches a score of 25 is the winner.

// Initializations
let score, roundScore, activePlayer, gamePlaying;

init();

// let player = document.querySelector('#current-' + activePlayer);


document.querySelector('.btn-roll').addEventListener('click', function () {
    // Check if game is playing
    if (gamePlaying) {
        //1. Roll the Dice
        dice = Math.floor(Math.random() * 6 + 1);

        //2. Display the result
        const diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'assets/dice-' + dice + '.png';

        //3. Update the round score IF the rolled number was not 1
        if (dice !== 1) {
            // Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    } else {

    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // Hold the players current score
        score[activePlayer] += roundScore;
        // console.log(score[activePlayer]);

        // Update the UI
        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];

        // Check if player has won the game
        if (score[activePlayer] >= 20) {
            document.getElementById('player-' + activePlayer).textContent = 'Winner!';
            // Hide dice
            document.querySelector('.dice').style.display = 'none';
            // Display Winner
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // Next Player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    // Reset round scores UI
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    // Toggle active player UI
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

function init() {
    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;


    // Hide the dice image
    document.querySelector('.dice').style.display = 'none';

    // Reset player scores to 0 at the begining of a round
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    // Reset current scores to 0 at the begining of a round
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Reset player names
    document.getElementById('player-0').textContent = 'Player 1';
    document.getElementById('player-1').textContent = 'Player 2';

    // Reset player UI
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}