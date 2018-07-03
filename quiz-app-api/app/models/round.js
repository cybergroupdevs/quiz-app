const db = require('./db')

const roundSchema = db.Schema({
  roundName: {
    type: String,
    required: true,
  },
  category: [{
    type: db.Schema.Types.ObjectId,
    ref: 'Category',
    count: Number
  }],
  type: {
    type: String,
    required: true,
    enum: ['BUZZER', 'PASS', 'TIMER'],
    default: 'TIMER'
  },
  positiveScore: {
    type: Number,
    required: true,
    validate: (value) => value > 0
  },
  negativeScore: {
    type: Number,
    required: true,
    validate: (value) => value <= 0
  },
  quizId: {
    type: db.Schema.Types.ObjectId,
    required: true
  }
})

module.exports = roundSchema