const ResourceController = require("../ResourceController");
const Team = require('../../models/team')
var bcrypt = require("bcryptjs")

class TeamController extends ResourceController {
  constructor(...args) {
    super(...args);
  }

}
var tc = new TeamController(Team);
team = {
  create: (req, res) => {
    try {
      if (req.body.name == "") {
        throw "Team Name is blank"
      }
      if (req.body.members.length == 0) {
        throw "Members list is blank"
      }
    } catch (ex) {
      res.status(400).json(ex);
    }
    let teamObj = new Team({
      "name": req.body.name,
      "members": req.body.members
    })


    bcrypt.hash(req.body.password, 10, (err, hash) => {
      teamObj.password = hash
      tc.create(teamObj).then((result) => {
        res.status(200).json(result);
      });
    })

  },
  list: (req, res) => {
    tc.index().then((result) => {
      result.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      res.status(200).json(result);

    });
  },

  delete: (req, res) => {
    try {
      if (req.params._id == "") {
        throw "Team Id is blank"
      }
    } catch (ex) {
      res.status(400).json(ex);
    }
    tc.delete(req.params._id).then((result) => {
      res.status(200).json(result);
    });
  },
  update: (req, res) => {
    var teamObj = {
      "name": req.body.name,
      "members": req.body.members
    }
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      teamObj.password = hash
      tc.update(teamObj, req.params._id).then((result) => {
        res.status(200).json(result);
      });
    })

  },
  show: (req, res) => {
    tc.show(req.params._id).then((result) => {
      res.status(200).json(result);
    });


  },

}

module.exports = team