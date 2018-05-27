var db = require('./db')

var category = db.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  isTechnology: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  }
})

module.exports = db.model('Category', category)