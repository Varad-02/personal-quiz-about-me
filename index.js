var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("What is your name? ");

console.log("Welcome "+ userName + " to HOW WELL DO YOU KNOW Varad");

function play(question, answer) {
  var userName = readlineSync.question(question);

  if (userName === answer) {
    console.log("you are Right!");
    score = score + 1;
    
  } else {
    console.log("you are wrong!");
    score = score - 1;
    
  }

  console.log("current score: ", score);
  console.log("-----------")
}

var questions = [{
  question: "What is my Age? ",
  answer: "20"
}, {
  question: "Where do I live? ",
  answer: "Pune" 
}, {
  question: "Which is my favorite sport? ",
  answer: "Cricket"
}, {
  question: "My favorite Marvel superhero would be? ",
  answer: "Iron Man"
}, {
  question: "My favorite mobile game would be? ",
  answer: "Pubg"
}];

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("Yayyyy! You comepleted this quiz and your final score is: ", score);