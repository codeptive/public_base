/* Codeptive Microservices Platform */

'use strict';

var request =       require('request');
var routes =        require('./routes/routes');
var jwt =           require('jwt-simple');
var util =          require('util');
var https =         require('https');
var port =          process.env.apiPort || 3001;
var sslPort =       process.env.sslPort || 8443;
var fs =            require('fs');
var logger =        require('./lib/logger/logger');

var jwt;
var app = routes.app;

// Start the server
var init = function () {
    var options = {
        key: fs.readFileSync('./key.pem'),
        cert: fs.readFileSync('./cert.pem')
    };
    https.createServer(options, app).listen(sslPort);
    console.log('Secure endpoint started at https://localhost:' + sslPort);
    console.log('db: ' + routes.dbPath);
}

init();
