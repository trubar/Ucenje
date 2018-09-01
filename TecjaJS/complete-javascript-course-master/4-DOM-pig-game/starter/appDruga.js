/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying;

init();
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score-0').textContent;
//console.log(x);



document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        //1. Naklučno število
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceTwo = Math.floor(Math.random() * 6) + 1;
        var diceSum = dice + diceTwo
        //2. izpiši rezultat
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice + '.png';
        document.getElementById('dice-2').src = 'dice-' + diceTwo + '.png';
        
        //3. Posodobi točke če (IF) ni bila vrednost 1
        if (dice !== 1 && diceTwo !== 1) {
            //dodaj stevilo
            roundScore += diceSum;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Naslednji igrač
            nextPlayer();
        }
    }   

});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        //dodaj trenutne točke skupnim točkam
        scores[activePlayer] += roundScore
        //Posodobi UI 
        var tocke = document.getElementById('scoreToWin').value;
        var tockeZmage
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //Undefined, 0, Null or "" are to false
        if (tocke) {
            tockeZmage = tocke;
        } else {
            tockeZmage = 100;
        }

        //Preveri če je igrač zmagal
        if (scores[activePlayer] >= tockeZmage) {
            document.querySelector('#name-' + activePlayer).textContent = 'Zmagovalec!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
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

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
};

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

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