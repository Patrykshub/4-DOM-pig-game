/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, avtivePlayer;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){

        
        // Random number
         var dice = Math.floor(Math.random() * 6) + 1

        // Display the result
        diceDOM = document.querySelector('.dice');

        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // Update the score IF the rolled number is NOT a 1.
        if(dice > 1){
            // add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
            // next player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
        // add current score to global score
        scores[activePlayer] += roundScore;

        // update UI user interface
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //check if player won the game
        if(scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner !';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

        }else{
            nextPlayer();

        }

});

function nextPlayer(){

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0'; 
    document.getElementById('current-1').textContent = '0'; 

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init)

function init(){

    winningScore = prompt('Input your winning score','100 for example');

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}


//dice = Math.floor(Math.random() * 6) + 1 // generuje randomowo cyfre pomiedzy 1 a 6.
//    console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice;

// document.querySelector('#current-' + activePlayer).innerHTML = '<em> dice </em>';

//var x = document.querySelector('#score-0').textContent;
//console.log(x);



// gracze sami ustalaja do ilu chca grac.













