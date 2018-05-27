var router = require("express").Router();
var {
  User
} = require("../../models/user");
var {
  Client
} = require("../../models/client");
var bcrypt = require("bcryptjs");
var jwt = require("jwt-simple");
var config = require("../../../config/config.js");
var users;

users = {
  "signup": function (req, res, next) {
    var user = new User({
      "name": req.body.name,
      "clientname": req.body.clientname,
      "email": req.body.email
    })
    bcrypt.hash(req.body.password, 10, function (err, hash) {
      user.password = hash
      user.save(function (err, user) {
        if (err) {
          console.error(err)
        }
        res.json(user);
      })
    });
  },
  "session": function (req, res, next) {
    Client
      .findOne({
        "users.email": req.body.email
      }, {
        "users": 1,
        "clientName": 1
      }, function (err, result) {
        if (err) {
          return next(err)
        }
        if (!result) {
          return res.send(401)
        }
        bcrypt
          .compare(req.body.password, result.users[0].password, function (err, valid) {
            if (err) {
              return next(err)
            }
            if (!valid) {
              return res.send(401)
            }
            var token = jwt.encode({
              "email": req.body.email,
              "clientname": result.clientName
            }, config.secret)
            console.log(token);
            res.json(token)
          })
      })
  },
  "signin": function (req, res, next) {
    if (!req.headers["x-auth"]) {
      return res.send(401, "You must send a valid header")
    }
    var auth = jwt.decode(req.headers["x-auth"], config.secret)
    Client.findOne({
      "users.email": auth.email
    }, {
      "users": 1,
      "clientName": 1
    }, function (err, result) {
      if (err) {
        return next(err)
      }
      var user = result
        .users
        .filter(function (user) {
          if (user.email == auth.email) {
            return user
          }
        })
        .map(function (user) {
          return user.name
        })
      // TODO : Vishal : This is so stupid. Correct it later
      user = user[Object.keys(user)[0]]
      var reponse = {
        "name": user,
        "clientName": result.clientName
      }
      res.json(reponse)
    })
  },
  "signout": function (req, res, next) {
    // WIP, currently logout functionality is handeled on front end Should add a
    // route on the backend too.
    res.send("WIP: This feature is not built yet")
  }
}

module.exports = users