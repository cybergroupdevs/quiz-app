/*jshint esversion: 6 */
const ResourceController = require('../ResourceController');
const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const config = require('../../../config/config.js');


class UserController extends ResourceController {
  constructor(...args) {
    super(...args);
  }

  signup(req, res) {
    // If the email already exists, don't signup a new email
    User.findOne({ email: req.body.data.email })
      .exec()
      .then(result => {
        if (result) {
          return res.status(409).json({
            message: 'Email Already Exists',
            code: 'EAE'
          })
        } else {
          // Hash the password to store it in the database
          req.body.data.password = this.getHashedPassword(req.body.data.password)
          
          req.body.data.username = req.body.data.username 
            || req.body.data.fullname.replace(/\s/g,'').toLowerCase() + req.body.data.password.replace(/\D/g, '').substring(4)
            
          this.create(req, res)
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error });
      })
  }

  login(req, res) {
    // Check if the email exists
    User.findOne({ email: req.body.data.email })
      .exec()
      .then(user => {
        if (user) {
          // email found, now compare password
          bcrypt.compare(req.body.data.password, user.password)
            .then(passwordsMatch => {
              if (passwordsMatch) {
                // Generate JWT token for session management
                const token = jwt.sign(
                  {
                    email: user.email,
                    userId: user._id
                  },
                  config.jwt_secret,
                  {
                    expiresIn: "1h"
                  }
                );

                res.status(200).json({
                  message: 'Login Successful',
                  code: 'LS',
                  auth: {
                    token: token,
                    expiresIn: "1h"
                  }
                })
              } else {
                res.status(401).json({
                  message: 'Incorrect Password',
                  code: 'IP' 
                })
              }
            })
        } else {
          // email not found
          return res.status(401).json({
            message: 'Email Does Not Exist',
            code: 'ENE'
          })
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error });
      })
  }

  list(req, res) {
    // The user apis must never send back password
    req.projectionObj = {
      "password": 0
    }
    super.list(req, res)
  }

  show(req, res) {
    // The user apis must never send back password
    req.projectionObj = {
      "password": 0
    }
    super.show(req, res)
  }

  update(req, res) {
    // Email cannot be changed
    if (req.body.data.email) {
      res.status(403).json({
        message: 'Email Address Cannot Be Changed',
        code: 'ECNC'
      })
    }
    // If password is to be updated, it will be hashed
    if (req.body.data.password) {
      req.body.data.password = this.getHashedPassword(req.body.data.password)
    }
    super.update(req, res)
  }

  getHashedPassword(plainPassword) {
    // TODO: Do this asynchronously 
    try {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(plainPassword, salt)
  
      return hashedPassword;
    } catch (error) {
      console.log(error)
    }
  }
}

const userController = new UserController(User);

module.exports = userController;