const db = require("./db")

const quizSchema = db.Schema({
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
  }]
})

module.exports = quizSchema