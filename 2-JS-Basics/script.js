const player1Height = 151;
const player1Age = 33;
const player2Height = 170;
const player2Age = 33;
const player3Height = 170;
const player3Age = 33;

let score1 = player1Height + 5 * player1Age;
let score2 = player2Height + 5 * player2Age;
let score3 = player3Height + 5 * player3Age;

if( score1 > score2 && score1 > score3 ){
	console.log("Wygrał Player1 z wynikiem " + score1 + ".");
} else if (score1 < score2 && score2 > score3){
	console.log("Wygrał Player2 z wynikiem " + score2 + ".");
} else if (score1 < score3 && score2 < score3){
	console.log("Wygrał Player3 z wynikiem " + score3 + ".");
} else if(score1 === score2 && score1 > score3){
	console.log("Wygrali ex-aequo Player1 i Player2 z wynikiem " + score1 + ".");
} else if(score1 === score3 && score1 > score2){
	console.log("Wygrali ex-aequo Player1 i Player3 z wynikiem " + score1 + ".");
} else if(score2 === score3 && score2 > score1){
	console.log("Wygrali ex-aequo Player2 i Player3 z wynikiem " + score2 + ".");
} else {
	console.log("Remis. Wszyscy gracze mieli " + score1 + " punktów.");
}