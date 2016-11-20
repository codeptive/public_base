// map user account schema
var mongoose = require('mongoose');
var config = require('../config/database');
console.log(config.database);
mongoose.connect(config.database);
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: String,
    middlename: String,
    lastname: String,
    organization: String,
    team: Boolean,
    admin: Boolean,
    city: String,
    state: String,
    country: String,
    countrycode: String,
    account_type: {
        type: String,
        required: true
    },
    credits: Number,
    meta: {
        age: Number,
        suspended: Boolean,
        probation: Boolean
    },
    created_at: Date,
    updated_at: Date
});

var User = mongoose.model('User', userSchema);
module.exports = User;