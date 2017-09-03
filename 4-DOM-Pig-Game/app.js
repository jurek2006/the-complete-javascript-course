/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, diceDOM, gamePlaying;
diceDOM = document.querySelector('.dice');

newGame();

document.querySelector('.btn-roll').addEventListener('click', function(){

	if(gamePlaying){
		// 1. Random number
		var dice = Math.floor(Math.random() * 6) + 1;

		// 2. Display the result
		var roundActivePlayer = document.getElementById('current-' + activePlayer);
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';

		// 3. Update the round score if the rolled number was not 1
		if(dice !== 1){
			// Add score
			roundScore += dice;
			roundActivePlayer.textContent = roundScore;
		} else {
			// Next player
			nextPlayer();
		}
	}
});

document.querySelector('.btn-hold').addEventListener('click', function(){

	if(gamePlaying){
		// Add current score to global score
		scores[activePlayer] += roundScore;

		// Update the UI
		document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

		// Chceck if player won the game
		if(scores[activePlayer] >= 100){
			// document.querySelector('.btn-roll').style.display = "none";
			// document.querySelector('.btn-hold').style.display = "none";
			document.getElementById('name-' + activePlayer).textContent = "WINNER!";
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			// Next player
			nextPlayer();
		}
	}
});

document.querySelector('.btn-new').addEventListener('click', newGame);

function newGame(){
	gamePlaying = true;
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	for(var i = 0; i < 2; i++){
		document.getElementById('name-' + i).textContent = "Player " + i;
		document.querySelector('.player-' + i + '-panel').classList.remove('winner');
		document.getElementById('score-' + i).textContent = '0';
		document.getElementById('current-' + i).textContent = '0';
	}	
	document.querySelector('.player-0-panel').classList.add('active');
	// document.querySelector('.btn-roll').style.display = "block";
	// document.querySelector('.btn-hold').style.display = "block";
	diceDOM.style.display = 'none';
}

function nextPlayer(){
	var roundActivePlayer = document.getElementById('current-' + activePlayer);
	roundScore = 0;
	roundActivePlayer.textContent = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;


	// change class of active player
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	// hide the dice
	diceDOM.style.display = 'none';
}

