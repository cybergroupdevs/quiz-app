const db = require('./db')

const categorySchema = db.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  isTechnology: {
    type: Boolean,
    default: true,
  },
  quizId: {
    type: db.Schema.Types.ObjectId,
    required: true
  }
})

module.exports = categorySchema