/* 
 * Codeptive Microservices Platform
 * 
*/

'use strict';

var express = require('express');
var request = require('request');
var mongoose = require('mongoose');
var config = require('./config/database');
var jwt = require('jwt-simple');
var util = require('util');
var https = require('https');
var fs = require('fs');
var logger = require('./lib/logger/logger');

var app = express();

var jwt;

app.get('/', function (req, res) {
    res.send('securismo!');
});

app.get('/api/authenticate', function (req, res) {

    var code = req.query.code;
    console.log(code)
    var sfUrl = "https://na35.salesforce.com";

    // ** Salesforce user test account
    var sUser = "dev1@seamlesscontacts.com";
    var sPass = "Seamless12345";


    conn.login(sUser, sPass, function (err, userInfo) {

        if (err) { res.send("Error:" + err); return; }
        // Now you can get the access token and instance URL information. 
        // Save them to establish connection next time. 
        console.log(conn.accessToken);
        console.log(conn.instanceUrl);
        // logged in user property 
        console.log("User ID: " + userInfo.id);
        console.log("Org ID: " + userInfo.organizationId);
        // ... 
        res.send("User ID:" + userInfo.id + "  Organization: " + userInfo.organizationId);
    });

});

// Start the server
var init = function () {
    var options = {
        key: fs.readFileSync('./key.pem'),
        cert: fs.readFileSync('./cert.pem')
    };
    https.createServer(options, app).listen(sslPort);
    console.log('There will be SECURE dragons: https://localhost:' + sslPort);
}

init();
