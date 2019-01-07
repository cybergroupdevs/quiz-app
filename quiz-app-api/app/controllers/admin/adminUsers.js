// var router = require("express").Router();
// var {
//   User
// } = require("../../models/user");
// var bcrypt = require("bcryptjs");
// var jwt = require("jwt-simple");
// var config = require("../../../config/config.js");
// var adminUsers;


// adminUsers = {
//   "signup": function (req, res, next) {
//     console.log("in this function as of now")
//     var user = new User({
//       "name": req.body.name,
//       "email": req.body.email,
//       "userType": "SUPERADMIN"

//     })
//     bcrypt.hash(req.body.password, 10, function (err, hash) {
//       user.password = hash
//       user.save(function (err, user) {
//         if (err) {
//           console.error(err)
//         }
//         res.json(user);

//       })
//     })


//   },
//   "session": function (req, res, next) {
//     User.findOne({
//       "email": req.body.email
//     }, function (err, user) {
//       if (err) {
//         return next(err)
//       }
//       if (!user) {
//         return res.send(401)
//       }
//       // TODO: Vishal : Redo this via select false for password
//       bcrypt.compare(req.body.password, user.password, function (err, valid) {
//         if (err) {
//           return next(err)
//         }
//         if (!valid) {
//           return res.send(401)
//         }
//         var token = jwt.encode({
//           "email": req.body.email
//         }, config.secret)
//         console.log(token);
//         res.json(token)
//       })
//     })
//   },
//   "signin": function (req, res, next) {
//     if (!req.headers["x-auth"]) {
//       return res.send(401, "You must send a valid header")
//     }
//     var auth = jwt.decode(req.headers["x-auth"], config.secret)
//     User.findOne({
//       "email": auth.email
//     }, function (err, user) {
//       console.log(user)
//       if (err) {
//         return next(err)
//       }
//       res.json(user)
//     })
//   },
//   "signout": function (req, res, next) {
//     // WIP, currently logout functionality is handeled on front end
//     // Should add a route on the backend too.
//     res.send("WIP: This feature is not built yet")
//   }
// }


// module.exports = adminUsers