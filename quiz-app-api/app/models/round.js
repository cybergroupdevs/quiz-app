var db = require('./db')

var round = db.Schema({
  roundName: {
    type: String,
    required: true,
  },
  category: [{
    type: db.Schema.Types.ObjectId,
    ref: 'Category',
    count: Number
  }],

  weightage: {
    type: Number
  },
  type: {
    type: String,
    required: true,
    enum: ['BUZZER', 'PASS', 'TIMER'],
    default: 'TIMER'
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date()
  }
})

module.exports = db.model('Round', round);