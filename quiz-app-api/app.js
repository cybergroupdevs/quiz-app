/**
 * Module dependencies.
 */
/*jshint esversion: 6 */
"use-strict";

const express = require("express");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./app/routes");
const morgan = require("morgan")

const app = express();
// const router = require("express").Router();
// const path = require("path");
app.use(morgan("dev"))
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, x-auth, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.json({
  "limit": 153791147
}));
app.use(bodyParser.urlencoded({
  "extended": true,
  "limit": 153791147
}));
app.use(bodyParser.json())

const port = process.env.PORT || 1830;

const server = app.listen(port, function () {
  console.log(`Magic begins at port ${port}`);
});

console.log("Base for API", routes.apiBaseUri);
console.log("Base for Admin", routes.adminBaseUri);

app.get(routes.ignition, function (req, res) {
  res.send("App is running");
});

//app.use(require("./config/auth"));

// API specific Routes
app.use(routes.apiBaseUri, routes.api(app));

// Admin specific Routes
// app.use(routes.adminBaseUri, routes.admin(app));

// app.use(express.static(path.resolve("public/assets/")))
// app.use(express.static(path.resolve("public/app/views"))) app.get("*",
// function(req, res) {     res.sendFile(path.resolve("public/index.html")); });