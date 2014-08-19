'use strict';

//Main dependencies
var load = require('express-load');

exports.init = function(app) {

	//Load skeleton
	load('libraries', {
		cwd: 'server'
	})
	.then('helpers', {
		cwd: 'server'
	})
	.then('models', {
		cwd: 'server'
	})
	.then('middlewares', {
		cwd: 'server'
	})
	.then('controllers', {
		cwd: 'server'
	})
	.then('routes', {
		cwd: 'server'
	})
	.into(app);

};
