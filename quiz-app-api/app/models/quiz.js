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
  }],
  admin: {
    type: db.Schema.Types.ObjectId,
    required: true
  },
  presenter: {
    type: db.Schema.Types.ObjectId,
  }
})

module.exports = quizSchema