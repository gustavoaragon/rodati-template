'use strict';

//Main dependencies
var express = require('express');
var nconf = require('nconf');
var config = nconf.get();

var engine = require('./engine');
var settings = require('./settings');
var middlewares = require('./middlewares');
var errors = require('./errors');
var load = require('./load');
var newrelic = require('./newrelic');
var winston = require('./winston');

module.exports = function() {

	var app = express();

	//Init template engine
	engine.init(app, config);

	//Init settings
	settings.init(app, config);

	//Load skeleton app
	load.init(app, config);

	//Init express middlewares
	middlewares.init(app, config);

	//Set errors
	errors.init(app, config);

	//Winston
	winston.init(app, config);

	//Newrelic
	newrelic.init(app, config);

	//Start
	app.listen(config.app.port);

	//Log
	console.log('\n==============================');
	console.log('Rodati');
	console.log('Started on port: ' + config.app.port);
	console.log('Enviroment: ' + app.get('env'));
	console.log('==============================\n');

	return app;

};