const db = require("./db");

const questionSchema = db.Schema({
  description: {
    type: String,
    required: true
  },
  options: [{
    answer: String,
    isCorrect: Boolean,
    isImage: Boolean
  }],
  difficulty: {
    type: String
  },
  image: {
    type: String
  },
  category: {
    type: String
  },
  technology: {
    type: String
  },
  isAsked: {
    type: Boolean
  },
  quizId: {
    type: db.Schema.Types.ObjectId,
    required: true
  }
})

module.exports = questionSchema