/*jshint esversion: 6 */
const ResourceController = require('../ResourceController');
const {
  User 
} = require("../../models");
// var bcrypt = require("bcryptjs");
// var jwt = require("jwt-simple");
// var config = require("../../../config/config.js");


class UserController extends ResourceController {
  constructor(...args) {
    super(...args);
  }

  // test(req, res) {
  //   res.send('test from class')
  // }
}

const userController = new UserController(User);
// user = {
//   signup: (req, res, next) => {
//     console.log(req.body);
//     let user = new User({
//       "name": req.body.name,
//       "email": req.body.email,
//       "cgiCode": req.body.cgiCode,
//       "photo": req.body.photo,
//       "userRole": req.body.userRole
//     });
//     bcrypt.hash(req.body.password, 10, (err, hash) => {
//       user.password = hash;
//       user.save((err, user) => {
//         if (err) {
//           console.error(err);
//         }
//         res.json(user); // TODO: Vishal // Change the response, send the password as well

//       });
//     });
//   },
//   session: (req, res, next) => {
//     User.findOne({
//         "email": req.body.email
//       },
//       (err, result) => {
//         if (err) {
//           return next(err);
//         }
//         if (!result) {
//           return res.send(401);
//         }
//         bcrypt.compare(req.body.password, result.password, (err, valid) => {
//           if (err) {
//             return next(err);
//           }
//           if (!valid) {
//             return res.send(401);
//           }
//           var token = jwt.encode({
//             email: req.body.email,
//             name: result.name
//           }, config.secret);
//           console.log(token);
//           res.json(token);
//         });
//       });
//   },
//   signin: (req, res, next) => {
//     if (!req.headers["x-auth"]) {
//       return res.send(401, "You must send a valid header");
//     }
//     var auth = jwt.decode(req.headers["x-auth"], config.secret);
//     User.findOne({
//         "email": auth.email
//       },
//       (err, result) => {
//         if (err) {
//           return next(err);
//         }
//         res.json(result); // TODO: Vishal // Change the response, send the password as well
//       });
//   },
//   create: (req, res) => {
//     uc.create({
//       "name": "Vishal",
//       "email": "vishal@jatana.ai",
//       "password": "123",
//       "cgiCode": "CGI405",
//       "photo": "https://vishalranjan.in/images/me.jpg",
//       "userRole": "Admin"
//     }).then((result) => {
//       res.send(result);
//     });
//   },
//   list: (req, res) => {
//     uc.index().then((result) => {
//       res.send(result);
//     });
//   },
//   show: (req, res) => {
//     uc.show(req.params._id).then((result) => {
//       res.send(result);
//     });
//   }



// };
module.exports = userController;