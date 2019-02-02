const ResourceController = require("../ResourceController");
const { Team, User } = require("../../models");
const { hashPassword, comparePassword } = require('../../utils/bcryptPassword')
const db = require('../../models/db')

class TeamController extends ResourceController {
  constructor(...args) {
    super(...args)
  }

  create(req, res) {
    // Only Team name and team password is mandatory from client side

    // User Id was added to body during authentication
    req.body.data.leader = req.body.data.leader || req.userId

    if (req.body.data.members && 
      req.body.data.members.findIndex(ele => ele === req.body.data.leader) === -1) {
      req.body.data.members.unshift(req.body.data.leader)
    } else {
      req.body.data.members = [req.body.data.leader]
    }

    req.body.data.password = hashPassword(req.body.data.password)

    super.create(req, res)
  }

  list(req, res) {
    // Modifying selectionObj to obtain all team for the user
    if (req.userId) {
      // Will get all teams if userId is not present
      req.selectionObj = {
        members: req.userId
      }
    }
    //TODO: Populate users while returning the teams data
    super.list(req, res)
  }

  update(req, res) {
    // If password is to be updated, it will be hashed
    if (req.body.data.password) {
      req.body.data.password = hashPassword(req.body.data.password)
    }

    // Remove leader's id from members array
    req.body.data.members = req.body.data.members.filter(member => String(member) !== req.userId)

    super.update(req, res)
  }

  addMember(req, res) {
    // This method expects the username of the member to be added to the team
    const id = req.params._id
    User.findOne({ username: req.body.data.username })
      .exec()
      .then(user => {
        if (user) {
          // User with the given username exists, now add him to the team
          console.log(user)
          Team.update({_id: id}, { $addToSet: { members: db.mongo.ObjectID(user._id) } })
            .exec()
            .then(result => {
              console.log(result)
              res.status(200).json({
                message: result.nModified + " member(s) added.",
                count: result.nModified
              })
            })
            .catch(error => {
              console.log(error)
              res.status(500).json({ error })
            })
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error });
      })
  }

  removeMember(req, res) {
    // This method won't allow to remove the team leader from the members
    // This method expects the username of the member to be added to the team
    const id = req.params._id
    User.findOne({ username: req.body.data.username })
      .exec()
      .then(user => {
        if (user && req.userId !== String(user._id)) {
          // User with the given username exists, now add remove him from the team
          Team.update({_id: id}, { $pull: { members: user._id } })
            .exec()
            .then(result => {
              console.log(result)
              res.status(200).json({
                message: result.nModified + " member(s) removed.",
                count: result.nModified
              })
            })
            .catch(error => {
              console.log(error)
              res.status(500).json({ error })
            })
        } else {
          res.status(400).json({
            message: 'Cannot remove team leader'
          })
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error });
      })
  }

  login(req, res) {
    // TODO: Implement this later
    // This will require to modify Team Model to add a field to uniquely indentify a team
    // from user's perspective
    // FIXME:
    res.send(500).json({})
  }
}

const teamController = new TeamController(Team)

module.exports = teamController