/*jshint esversion: 6 */
const ResourceController = require('../ResourceController');
const { User } = require("../../models");
const { hashPassword, comparePassword } = require('../../utils/bcryptPassword')
const generateUsername = require('../../utils/generateUsername')
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
          req.body.data.password = hashPassword(req.body.data.password)
          
          req.body.data.username = req.body.data.username 
            || generateUsername(req.body.data.fullname, req.body.data.password)
            
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
          comparePassword(req.body.data.password, user.password,
            (passwordsMatch) => {
              if (passwordsMatch) {
                // Generate JWT token for session management
                const token = jwt.sign(
                  {
                    email: user.email,
                    userId: user._id
                  },
                  config.jwt_secret,
                  {
                    expiresIn: 3600 //Number of seconds after this token expires
                  }
                );

                res.status(200).json({
                  message: 'Login Successful',
                  code: 'LS',
                  auth: {
                    token: token,
                    expiresIn: "3600"
                  }
                })
              } else {
                res.status(401).json({
                  message: 'Incorrect Password',
                  code: 'IP' 
                })
              }
            },
            (error) => {
              console.log(error);
              res.status(500).json({ error });
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
      req.body.data.password = hashPassword(req.body.data.password)
    }
    super.update(req, res)
  }
}

const userController = new UserController(User);

module.exports = userController;