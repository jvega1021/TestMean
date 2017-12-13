
var express = require("express");
var api = express.Router();

var UserController = require("../controllers/user_controller");

api.get('/test' , UserController.test);
api.get('/findAll' , UserController.findAll);

api.post('/store' , UserController.store);
api.put('/update/:id' , UserController.update);
api.delete('/delete/:id' , UserController.deleteUser);


module.exports = api;
