// routing model
var express =       require('express');
var config =        require('../config/database');
var User =          require('../models/user');
var Auth =          require('../lib/auth/auth');
var bodyParser =    require('body-parser');

var app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('securismo!');
});

app.post('/api/user/create', function (req, res) {

    var userObj = req.body;
    var hashedPwd;

    if (userObj.password == null || userObj.password == undefined) {
        console.log("There was an error creating new user account: Required field(s) missing.");
        res.send("Error: Account could not be created. Please check your required fields.");
        return;
    } else {
        hashedPwd = Auth.hash(userObj.password);
        console.log(hashedPwd);
    }

    if (userObj.account_type == null || userObj.account_type == undefined) {
        console.log("There was an error creating new user account: Required field(s) missing.");
        res.send("Error: Account could not be created. Please check your required fields.");
    } else {
        var dateNow = new Date();
        var credits = 0;
        var age = 0;

        if (userObj.meta && userObj.meta.age) {
            age = userObj.meta.age;
        }

        var newUser = new User({
            username: userObj.username || null,
            password: userObj.password || null,
            firstname: userObj.firstname || null,
            middlename: userObj.middlename || null,
            lastname: userObj.lastname || null,
            admin: userObj.admin || false,
            city: userObj.city || null,
            state: userObj.state || null,
            country: userObj.country || null,
            countrycode: userObj.countrycode || null,
            account_type: userObj.account_type || null,
            credits: userObj.credits || credits,
            meta: {
                age: age,
                suspended: false,
                probation: false
            },
            created_at: dateNow,
            updated_at: dateNow
        });
        var response;

        newUser.save(function (err) {
            console.log("newUser works");
            if (err) {
                console.log("There was an error creating new user account:");
                console.log(err);
                response = { "error": err };
            } else {
                try {
                    var responseObj = {
                        username: userObj.username || null,
                        password: userObj.password || null,
                        firstname: userObj.firstname || null,
                        middlename: userObj.middlename || null,
                        lastname: userObj.lastname || null,
                        admin: userObj.admin || false,
                        city: userObj.city || null,
                        state: userObj.state || null,
                        country: userObj.country || null,
                        countrycode: userObj.countrycode || null,
                        account_type: userObj.account_type || null,
                        credits: userObj.credits || credits,
                        meta: {
                            age: userObj.meta.age || null,
                            suspended: false,
                            probation: false
                        },
                        created_at: dateNow,
                        updated_at: dateNow
                    }
                    console.log('User created successfully');
                    response = { "token": Auth.createToken(responseObj) };

                }
                catch (e) {
                    console.log("There was a fatal error");
                    response = { "error": e };
                }
            }

            res.send(response);

        });
    }

});

app.post('/api/user/auth', function (req, res) {

    var authObj = req.body;
    mongoose.connect(config.database);

    res.send('securismo!');

});

var routes = {
    app: app,
    dbPath: config.database
}
module.exports = routes;