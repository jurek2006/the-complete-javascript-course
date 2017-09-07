(function(){
	// Build a function constructor called Question to describe question. 
	function Question(question, answers, corrAnswInd){
		this.question = question;
		this.answers = answers;
		this.corrAnswInd = corrAnswInd;
	}

	Question.prototype.pytanieIprawOdp = function(){
		console.log(this.question + ' Prawidłowa odpowiedź: ' + this.answers[this.corrAnswInd]);
	}

	Question.prototype.consoleQuestion = function(){
		console.log(this.question);
		for (var i = 0; i < this.answers.length; i++){
			console.log(i + '. ' + this.answers[i]);
		}
	}

	Question.prototype.checkUserAnswer = function(userAnswer){
		if(userAnswer === this.corrAnswInd){
			console.log("Odpowiedź prawidłowa.");
			return true;
		} else if (userAnswer > 0 && userAnswer < this.answers.length){
			console.log("Odpowiedź nieprawidłowa.");
			return false;
		} else {
			console.log("Brak odpowiedzi o numerze " + userAnswer + " do podanego pytania.");
			return false;
		}
	}

	// Create a couple of questions using the constructor and store them inside the array
	var questions = [];

	questions.push( new Question(
						'Jakie miasto jest stolicą Polski?',
						['Oława', 'Opole', 'Warszawa', 'Praga'],
						2
					));

	questions.push( new Question(
						'Które z państw nie graniczy z Polską?',
						['Francja', 'Słowacja', 'Rosja', 'Białoruś'],
						0
					));

	questions.push( new Question(
						'W którym roku wybuchła II Wojna Światowa?',
						['1911', '1914', '1945', '1939'],
						3
					));
	// SPOSÓB WHILE
	var score = 0;
	while(true){

		// Select one random question and log it on the console, with possible answers
		var questionNum = Math.floor(Math.random() * questions.length);
		questions[questionNum].consoleQuestion();

		// Use the 'prompt' to ask user for the correct answer
		// If user input 'exit' - finish the loop
		userAnswerNum = prompt("Podaj numer prawidłowej odpowiedzi");
		if(userAnswerNum === 'exit'){ break }
		else {userAnswerNum = parseInt(userAnswerNum)}
		if(questions[questionNum].checkUserAnswer(userAnswerNum)){
		// if function returns true === correct answer
			score++;
		}
		console.log('Wynik: ' + score);
	}


})();

// console.log(questions); Nie zadziała, bo kod jest w "prywatnej" funkcji IIFE

