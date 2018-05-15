/**
 * Module dependencies.
 */
 /*jshint esversion: 6 */
var router = require('express').Router();
var users = require('./api/users');
var analytics = require('./api/analytics');
var user = require('./api/UserController');
var quiz = require('./api/QuizController');
var category = require('./api/CategoryController');
var team = require('./api/TeamController');
var clients = require('./admin/clients');
var adminUsers = require('./admin/adminUsers');

var question = require("./api/QuestionController");
module.exports = {
    // Extras
    // init: init,
    // http: http,

    // API Endpoints
    users: users,
    analytics: analytics,
    user: user,
    quiz: quiz,
    category: category,
    question: question,
    team: team,

    // Admin Endpoints
    clients: clients,
    adminUsers: adminUsers
};