const jwt = require('jsonwebtoken');
const config = require('../../../config/config')
const { AUTH_HEADER } = require('../../utils/constants')

const authenticateUser = (req, res, next) => {
  console.log(req.headers);
  console.log(req.headers[AUTH_HEADER])
  console.log(req.headers[AUTH_HEADER].split(' ')[1]);
  if (req.headers && req.headers[AUTH_HEADER]) {
    const token = req.headers[AUTH_HEADER].split(' ')[1]
    jwt.verify(token, config.jwt_secret, (error, decoded) => {
      if (error) {
        res.status(401).json({
          error,
          message: 'Invalid Token! Please sign in to access this route'
        })
      }

      // TODO: verfiy if the decoded contains a valid userId and only then call next()
      req.userId = decoded.userId
      next()
    })
  } else {
    res.status(401).json({
      message: 'No Auth token! Please sign in to access this route'
    })
  }
}

module.exports = identifyUser