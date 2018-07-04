const db = require('./db')
const timestamp = require('./plugins/timestamp')

const models = {
  Category: db.model('Category', require("./category").plugin(timestamp)),
  Question: db.model('Question', require("./question").plugin(timestamp)),
  Quiz: db.model('Quiz', require("./quiz").plugin(timestamp)),
  Round: db.model('Round', require("./round").plugin(timestamp)),
  Team: db.model('Team', require("./team").plugin(timestamp)),
  User: db.model('User', require("./user").plugin(timestamp))
}

module.exports = models