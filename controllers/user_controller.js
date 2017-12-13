var User = require("../models/user");
var path = require('path');

function test(req, res){
    res.status(200).send('<h1>Hello! Word</h1>');
}

function findAll(req,res){
	User.find( function(err, users){
		if (err){
			res.status(500).send('Error de peticion');
		}
		else{
			if (!users) {
				res.status(404).send('user no found');
			}else{
				res.status(200).send({user : users});
			}
		}
	});
}

function update(req , res){
	User.findByIdAndUpdate(req.params.id, req.body, function(err, userUpdate) {
		if (err){
			res.status(500).send('Error de peticion');
		}
		else{
			if (!userUpdate) {
				res.status(404).send('user no found');
			}else{
				res.status(200).send({user : userUpdate});
			}
		}
	});
}

function store(req , res){
	var userSave = new User(req.body);
	userSave.save(function (err, userSave) {
		if (err){
			res.status(500).send('Error de peticion');
		}
		else{
			if (!userSave) {
				res.status(404).send('user not save');
			}else{
				res.status(200).send({user : userSave});
			}
		}
	});
}

function deleteUser(req, res){
	User.findOneAndRemove({ _id : req.params.id }, function(err) {
		if (err){
			res.status(500).send('Error de peticion');
		}
		else{
			res.status(200).send('User Delete');
		}
	});
}

module.exports = {
	 test,
	 store,
	 update,
	 deleteUser,
	 findAll
};

