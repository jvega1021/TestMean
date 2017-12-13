'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = mongoose.model('User', {
	username : String,
	password : String
});

module.exports = UserSchema;