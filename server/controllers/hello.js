'use strict';

//Main dependencies
var winston = require('winston');

//Index
exports.index = function(req, res) {

	winston.info('Hello index');

	res.send('index');

};

//World
exports.world = function(req, res) {

	res.render('hello/world');

};

//Team
exports.team = function(req, res) {

	var model = req.app.models.team;

	res.send(model);

};
