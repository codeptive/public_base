// codeptive public commercial site

"use strict";

// module dependencies 
var http        = require('http');
var express     = require('express');
var request     = require('request');
var request2    = require('request');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var config      = require('./config/database');
var jwt         = require('jwt-simple');

// environ
var port = process.env.port || 8082;
var app = express();

app.set("port", port);

app.get('/', function (req, res) {


    res.send("hello node");
});

// server
var server = http.createServer(app);
server.listen(port);

// error handler
server.on("error", function (err, data) {
    
});

//start listening on port
server.on("listening", function () {
    console.log("Server started on port: " + port);
});