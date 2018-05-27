var jwt = require("jwt-simple");
var {
  secret
} = require("./config").secret;

module.exports = function (req, res, next) {
  if (req.headers["x-auth"]) {
    req.auth = jwt.decode(req.headers["x-auth"], secret);
    console.log(req.auth);
    next();
  } else {
    console.log("no header")
    next()
    // res.send("You are not sending valid headers")
  }
}