
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var question8 = document.quiz.question8.value;
  var question9 = document.quiz.question9.value;
  var question10 = document.quiz.question10.value;
  var question11 = document.quiz.question11.value;
  var question12 = document.quiz.question12.value;
	var correct = 0;


	if (question1 == "Animal Agriculture", "animal agriculture") {
		correct++;
}
	if (question2 == "Osteoporosis") {
		correct++;
}
	if (question3 == "True") {
		correct++;
	}
  if (question4 == "True") {
		correct++;
}
	if (question5 == "2,000,000") {
		correct++;
}
	if (question6 == "Chicken") {
		correct++;
	}
  if (question7 == "All of the above") {
		correct++;
}
	if (question8 == "True") {
		correct++;
}
	if (question9 == "51%") {
		correct++;
	}
  if (question10 == "Gas chamber") {
		correct++;
}
	if (question11 == "Less than 1 square metre") {
		correct++;
}
	if (question12 == "24 to 72 hours") {
		correct++;
	}

	var pictures = ["img/win.gif", "img/meh.gif", "img/lose.gif"];
	var messages = ["Great job!", "Nearly!", "You lose! But it doesn't have to be this way"];
	var score;

	if (correct == 0 || correct < 4) {
		score = 2;
	}

	if (correct > 4 && correct < 10) {
		score = 1;
	}

	if (correct == 10 && correct < 12) {
		score = 0;
	}


	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
}
