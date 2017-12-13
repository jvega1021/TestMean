
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var UseRoute = require('./routes/user_route');

var app = express ();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/crud', UseRoute);

module.exports = app;