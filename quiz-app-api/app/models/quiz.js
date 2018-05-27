var db = require("./db")

var quiz = db.Schema({
  quizName: {
    "type": String,
    "required": true,
  },
  year: {
    "type": String
  },
  rounds: [{
    type: db.Schema.Types.ObjectId,
    ref: 'Round',
  }],
  createdAt: {
    "type": Date,
    "default": new Date(),
  }
})

module.exports = db.model("Quiz", quiz);