console.log("HOW WELL DO YOU KNOW THIS SUPERHERO?")
console.log("--------------------------------------")
var readlineSync = require("readline-sync");

var username = prompt("What's your user name?");
console.log("Welcome " + username + " !!")
console.log("--------------------------------------")

questionOne = {
  question: "Which superhero is known as ruthless vigilante in his city?  ",
  answer: "Batman"
}
questionTwo = {
  question: "What does he rely on except his fighting skills and intellect? ",
  answer: "Wealth"
}
questionThree = {
  question: "Does he bleed? ",
  answer: "Yes"
}
questionFour = {
  question: "Who is batman's butler? ",
  answer: "Alfred"
}
questionFive = {
  question: "Christian Bale > Ben Affleck? true or false ",
  answer: "true"
}

var questionList = [questionOne, questionTwo, questionThree, questionFour, questionFive]

var score = 0

function quiz(question, answer) {
  var userAnswer = readlineSync.question(question).toLowerCase()

  if (userAnswer == answer.toLowerCase()) {
    console.log("You are right!")
    score = score + 1
    console.log("-----------------------------")
  } else {
    console.log("You a fool haha")
    score = score - 1
    console.log("-----------------------------")
  }

  console.log("Your score is " + score)
}

for (var i = 0; i < questionList.length; i++) {
  var currentQue = questionList[i]
  console.log(quiz(currentQue.question, currentQue.answer))
}

console.log("YOUR FINAL SCORE IS " + score)