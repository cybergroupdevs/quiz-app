// # API routes
var express = require('express'),
  admin = require('../controllers'),
  apiRoutes;
var path = require('path')

apiRoutes = function (router) {
  router = express.Router();

  // ## Admin Auth
  router.post('/users/signup', admin.adminUsers.signup);
  router.post('/users/session', admin.adminUsers.session);
  router.get('/users/signin', admin.adminUsers.signin);
  router.get('/users/signout', admin.adminUsers.signout);

  // ## Admin Routes
  router.post('/client/new', admin.clients.create);
  router.get('/clients', admin.clients.list);
  router.get('/client/edit/:_id', admin.clients.show);
  router.post('/client/update/:_id', admin.clients.update);
  router.post('/client/adduser/:_id', admin.clients.addUser);

  router.post('/client/hascsv/:_id', admin.clients.hascsv);


  return router;
};

module.exports = apiRoutes;