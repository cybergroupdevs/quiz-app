var db = require("./db");

var question = db.Schema({
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
  createdAt: {
    type: Date,
    default: new Date()
  },
  updatedAt: {
    type: Date,
    default: new Date()
  }
})


module.exports = db.model("Question", question);