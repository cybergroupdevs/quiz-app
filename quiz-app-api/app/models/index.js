const db = require('./db')
const timestampPlugin = require('./plugins/timestamp')

const models = {
  Category: db.model('Category', require("./category").plugin(timestampPlugin)),
  Question: db.model('Question', require("./question").plugin(timestampPlugin)),
  Quiz: db.model('Quiz', require("./quiz").plugin(timestampPlugin)),
  Round: db.model('Round', require("./round").plugin(timestampPlugin)),
  Team: db.model('Team', require("./team").plugin(timestampPlugin)),
  User: db.model('User', require("./user").plugin(timestampPlugin))
}

module.exports = models