/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice_0 as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var pointsToWin, scores, roundScore, activePlayer, diceDOM_0, gamePlaying;
diceDOM_0 = document.querySelector('.dice-0');
diceDOM_1 = document.querySelector('.dice-1');
pointsToWin = 100;

newGame();

document.querySelector('.btn-roll').addEventListener('click', function(){

	if(gamePlaying){
		// 1. Random number
		var dice_0 = Math.floor(Math.random() * 6) + 1;
		var dice_1 = Math.floor(Math.random() * 6) + 1;

		// 2. Display the result
		var roundActivePlayer = document.getElementById('current-' + activePlayer);
		diceDOM_0.style.display = 'block';
		diceDOM_0.src = 'dice-' + dice_0 + '.png';
		diceDOM_1.style.display = 'block';
		diceDOM_1.src = 'dice-' + dice_1 + '.png';

		// 3. Update the round score if the rolled number was not 1 and not 6 on both dices
		if(dice_0 === 6 && dice_1 === 6){
			roundActivePlayer.textContent = 0;
			scores[activePlayer] = 0;
			document.getElementById('score-' + activePlayer).textContent = '0';
			console.log("Double 6");
			nextPlayer();
		} else if(dice_0 !== 1 && dice_1 !== 1){
			// Add score
			roundScore += dice_0 + dice_1;
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
		if(scores[activePlayer] >= pointsToWin){
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

document.querySelector('.btn-start').addEventListener('click', function(){

	// gettings points to wind from input (if not between 10 and 1000 clear input)
	var pointsInput = document.getElementById('points-to-win');

	// check if number in input is integer - if not - floor:
	if(pointsInput.value % 1 !== 0){
		pointsInput.value = Math.floor(pointsInput.value);
	}

	if(pointsInput.value >= 10 && pointsInput.value <= 1000){
		// change the global points needed to win the game
		pointsToWin = pointsInput.value;

		// hide start window and show game window
		document.querySelector('.init-panel').classList.toggle('init-panel--visible');
		document.querySelector('.game-panel').classList.toggle('game-panel--visible');
	}
	else{
		pointsInput.value = "";
	}
})

function newGame(){
	// hide game windows and show start window
	document.querySelector('.init-panel').classList.add('init-panel--visible');
	document.querySelector('.game-panel').classList.remove('game-panel--visible');

	document.getElementById('points-to-win').value = pointsToWin;
	gamePlaying = true;
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	previousDice = 0;
	for(var i = 0; i < 2; i++){
		document.getElementById('name-' + i).textContent = "Player " + i;
		document.querySelector('.player-' + i + '-panel').classList.remove('winner');
		document.getElementById('score-' + i).textContent = '0';
		document.getElementById('current-' + i).textContent = '0';
	}	
	document.querySelector('.player-0-panel').classList.add('active');
	// document.querySelector('.btn-roll').style.display = "block";
	// document.querySelector('.btn-hold').style.display = "block";
	diceDOM_0.style.display = 'none';
	diceDOM_1.style.display = 'none';
}

function nextPlayer(){
	var roundActivePlayer = document.getElementById('current-' + activePlayer);
	roundScore = 0;
	roundActivePlayer.textContent = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	previousDice = 0;

	// change class of active player
	for(var i = 0; i < 2; i++){
		document.querySelector('.player-'+ i +'-panel').classList.toggle('active');
	}

	// hide the dice_0 and dice_1
	diceDOM_0.style.display = 'none';
	diceDOM_1.style.display = 'none';
}

