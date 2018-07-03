const db = require("./db")

const teamSchema = db.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  members: [{
    type: String
  }],
  password: {
    type: String,
    required: true
    //select: false
  }
})

module.exports = teamSchema