/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore,activePlayer,isGamePlaying,previousDice;

init();
function init(){
    isGamePlaying = true;
    score= [0,0];
    roundScore=0;
    activePlayer = 0;
    previousDice = 6;

    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector("#name-0").textContent = 'PLAYER 1';
    document.querySelector("#name-1").textContent = 'PLAYER 1';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

document.querySelector('.btn-roll').addEventListener('click',function(){
   if(isGamePlaying){
        //Role Dice with RANDOM Number function
        var dice = Math.floor(Math.random() * 6) +1; 

        //Display the result
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-'+dice+'.png';

        //Update the roundScore if rolled number is 1
        if((dice === 6 && previousDice === dice) || dice===1){
            //Next Player
            nextPlayer();
            //roundScore += dice;
            //document.querySelector('#current-'+activePlayer).textContent = roundScore;
        }else{
            roundScore += dice;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
        }
   
   }
});

function nextPlayer(){
    activePlayer = activePlayer === 0?1:0;
        roundScore = 0;
        document.querySelector('#current-0').textContent = roundScore;
        document.querySelector('#current-1').textContent = roundScore;
        document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click',init);
    
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(isGamePlaying){
        // Add current score to global
         score[activePlayer] += roundScore;

        // Update it on UI
        document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];

        // Check if player won
        if(score[activePlayer] >= 20){
            document.querySelector('.dice').style.display = 'none';
            document.querySelector("#name-"+activePlayer).textContent = 'WINNER!!!!';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            isGamePlaying = false;
        }else{
            nextPlayer();    
        }    
    }
});


// 1. If Dice rolled 6 twice then player loose entire score