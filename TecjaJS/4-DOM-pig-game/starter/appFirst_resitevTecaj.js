/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying, oldDice;

init();
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score-0').textContent;
//console.log(x);



document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        //1. Naklučno število
        var dice = Math.floor(Math.random() * 6) + 1;
        
        //2. izpiši rezultat
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        //3. Posodobi točke če (IF) ni bila vrednost 1
        if (dice === 6 && oldDice === 6) {
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer ();
        } else if (dice !== 1) {
            //dodaj stevilo
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Naslednji igrač
            nextPlayer();
        };
        
        oldDice = dice;
    }   

});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        //dodaj trenutne točke skupnim točkam
        scores[activePlayer] += roundScore
        //Posodobi UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //Preveri če je igrač zmagal
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Zmagovalec!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Naslednji igrač
            nextPlayer();
        }
    }

    
});

document.querySelector('.btn-new').addEventListener('click', init);//init() brez oklepajev da jo ne kličem


function nextPlayer() {
    //Naslednji igrač
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
    oldDice = true;
};

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Igralec 1';
    document.getElementById('name-1').textContent = 'Igralec 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

};