var Quiz = require("../app/models/quiz");

var bulk = [{
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}, {
  "quizName": "Quiz 2.0",
  "year": "2018"
}]

bulk.map(function (data) {
  Quiz
    .create(data, function (err, doc) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Bulk Updated for Quizes");
      console.log(doc)
    });
})