// var db = require("./db");

// var client = db.Schema({
//   clientName: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   displayName: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   domain: {
//     type: String
//   },
//   brief: {
//     type: String
//   },
//   address: {
//     type: String
//   },
//   metadata: {
//     facebook_url: {
//       type: String
//     }
//   },
//   plan: {
//     nlp: {
//       type: Boolean,
//       default: false
//     },
//     bot: {
//       type: Boolean,
//       default: true
//     },
//     dashboard: {
//       type: Boolean,
//       default: false
//     }
//   },
//   hasCSV: {
//     type: Boolean,
//     default: false
//   },
//   users: [{
//     name: {
//       type: String,
//       // required: true
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true
//     },
//     password: {
//       type: String,
//       required: true,
//       // select: false  // TODO : Vishal : Redo this, find a way to select more fields
//     },
//     userType: {
//       type: String,
//       required: true,
//       enum: ["USER", "ADMIN", "SUPERADMIN"],
//       default: "USER"
//     },
//     verified: {
//       type: Boolean,
//       default: false

//     }
//   }],
//   createdAt: {
//     type: Date,
//     default: new Date(),
//   },
//   updatedAt: {
//     type: Date,
//     default: new Date(),
//   }
// })

// module.exports = db.model("Client", client)