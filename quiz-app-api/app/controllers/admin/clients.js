// var router = require('express').Router()
// var {
//   Client
// } = require('../../models/client')
// var bcrypt = require('bcryptjs')
// var jwt = require('jwt-simple')
// var config = require('../../../config/config.js')
// var clients;


// clients = {
//   create: function (req, res, next) {
//     var clientObj = {
//       "clientName": req.body.clientName,
//       "brief": req.body.brief,
//       "domain": req.body.domain,
//       "users": [{
//         "email": req.body.email,
//         "name": req.body.name,
//         "password": "",
//         "userType": "ADMIN"
//       }]

//     }
//     bcrypt.hash(req.body.password, 10, function (err, hash) {

//       clientObj.users[0].password = hash
//       Client.create(clientObj, function (err, client) {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log("User added");
//         return res.json(client);
//       });
//     })
//   },
//   update: function (req, res, next) {
//     var updatedClientObj = {
//       "clientName": req.body.clientName,
//       "brief": req.body.brief,
//       "domain": req.body.domain,
//       "address": req.body.address,
//       "options": req.body.options

//     }
//     Client.findOneAndUpdate({
//       _id: req.params._id
//     }, {
//       $set: updatedClientObj
//     }, function (err, client) {
//       res.json(client)
//     })

//   },
//   addUser: function (req, res, next) {
//     bcrypt.hash(req.body.password, 10, function (err, hash) {
//       var userObj = {
//         "email": req.body.email,
//         "name": req.body.name,
//         "password": hash,
//         "userType": "USER"
//       }
//       Client.findOneAndUpdate({
//         _id: req.params._id
//       }, {
//         $push: {
//           "users": userObj
//         }
//       }, function (err, client) {
//         res.json(client)
//       })
//     })
//   },
//   list: function (req, res, next) {
//     Client.find({}, function (err, clients) {
//       if (err) {
//         return next(err)
//       }
//       res.json(clients)
//     })
//   },
//   show: function (req, res, next) {
//     Client.find({
//       _id: req.params._id
//     }, function (err, client) {
//       if (err) {
//         return next(err)
//       }
//       res.json(client)
//     })
//   },
//   hascsv: function (req, res, next) {
//     Client.findOneAndUpdate({
//       _id: req.params._id
//     }, {
//       $set: {
//         "hasCSV": true
//       }
//     }, function (err, client) {
//       res.json(client)
//     })
//   }


// }


// module.exports = clients