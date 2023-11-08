"use strict";

var path = require("path");
var http = require("http");
var express = require("express");
var jwt = require("jsonwebtoken");

var oas3Tools = require("oas3-tools");
var serverPort = 8080;

// Import your fake data
var data = require("./data");

// Create an Express app
var app = express();

// Middleware to check JWT token
const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
};

// Use the authentication middleware
app.use(authenticateJWT);

// swaggerRouter configuration
var options = {
  routing: {
    controllers: path.join(__dirname, "./controllers"),
  },
};

// Pass the fake data to the expressAppConfig
var expressAppConfig = oas3Tools.expressAppConfig(
  path.join(__dirname, "api/openapi.yaml"),
  options,
  data
);

// Include the Swagger middleware
app.use(expressAppConfig.getApp());

// Start the server
http.createServer(app).listen(serverPort, function () {
  console.log(
    "Your server is listening on port %d (http://localhost:%d)",
    serverPort,
    serverPort
  );
  console.log(
    "Swagger-ui is available on http://localhost:%d/docs",
    serverPort
  );
});
