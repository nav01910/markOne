var readlineSync = require("readline-sync");

questionOne = {
  question: "Favorite superhero? ",
  answer: "Batman"
}
questionTwo = {
  question: "He single or no? ",
  answer: "Yes"
}
questionThree = {
  question: "Does he bleed? ",
  answer: "No"
}
questionFour = {
  question: "His parents died of cancer. T/F ",
  answer: "F"
}
questionFive = {
  question: "Which actor played batman best? ",
  answer: "Christian Bale"
}

var questionList = [questionOne, questionTwo, questionThree, questionFour, questionFive]

var score = 0

function quiz(question, answer) {
  var userAnswer = readlineSync.question(question).toLowerCase()

  if (userAnswer == answer.toLowerCase()) {
    console.log("You are right!")
    score = score + 1
  } else {
    console.log("You a fool haha")
    score = score - 1
  }

  console.log("Your final score is " + score)
}

for (var i = 0; i < questionList.length; i++) {
  var currentQue = questionList[i]
  console.log(quiz(currentQue.question, currentQue.answer))
}
