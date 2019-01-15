const db = require('./db')

const userSchema = db.Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
    //unique: true
  },
  username: {
    type: String,
    // required: true,
    // unique: true
  },
  password: {
    type: String,
    required: true
  },
  // cgiCode: {
  //   type: String,
  //   required: true
  //   //unique: true
  // },
  // photo: {
  //   type: String
  // },
  // userRole: {
  //   type: String,
  //   required: true,
  //   enum: ['ADMIN', 'PRESENTER'],
  // }
})

module.exports = userSchema