
var userName = prompt("Enter Your Name");

console.log(`Hi ${userName}! , Welcome to the Quiz`);

var score = 0;

function play(question, answer) {
  if (question === answer) {
    console.log("You are correct!");
    score = score + 1;
  } else {
    console.log("Incorrect !!");
  }
  console.log("Current Score: ", score);
}

var question = [
  {
    question: "Mount Everest is located in ?",
    options: ["a.India", "b.Nepal", "c.Tibet", "d.China"],
    answer: "b",
  },
  {
    question: "The Gate way of India is in?",
    options: ["a. Chennai", "b. Mumbai", "c. Kolkata", "d. New Delhi"],
    answer: "b",
  },
  {
    question: "Which is considered as the biggest port of India ?",
    options: ["a. Kolkata", "b. Cochin", "c. Chennai", "d. Mumbai"],
    answer: "d",
  },

  {
    question: " Pink city in India is ?",
    options: ["a. Mysore", "b. Karnataka", "c.  Hyderabad", "d.Jaipur"],
    answer: "d",
  },

  {
    question: " The largest fresh water lake in India is ?",
    options: [
      "a. Pulicat Lake",
      "b. Veeranam Lake",
      "c.  Chilka Lake",
      "d. Kolleru Lake",
    ],
    answer: "d",
  },
];

for (var i = 0; i < question.length; i++) {
  var currentQuestion = question[i];
  console.log(i + 1, ".", currentQuestion.question);

  for (var j = 0; j < currentQuestion.options.length; j++) {
    console.log(currentQuestion.options[j]);
  }
  var userAnswer = prompt("Enter the correct option no. ");
  play(currentQuestion.answer, userAnswer);
}

console.log("Your final score is ", score);
