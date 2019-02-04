const db = require("./db")

const teamSchema = db.Schema({
  name: {
    type: String,
    required: true,
    // unique: true
  },
  leader: {
    type: db.Schema.ObjectId,
    required: true
  },
  members: [{
    type: db.Schema.Types.ObjectId,
    ref: 'User'
  }],
  password: {
    type: String,
    required: true
  }
})

module.exports = teamSchema