/*eslint no-unused-vars:0*/

'use strict';

/**
 * Global modules
 */
var express = require('express');
var nconf = require('nconf');
var newrelic = require('newrelic');

/**
 * Submodules
 */
var engine = require('./_engine');
var settings = require('./_settings');
var middlewares = require('./_middlewares');
var errors = require('./_errors');
var load = require('./_load');
var winston = require('./_winston');

/**
 * Private variables
 */
var _config = nconf.get();
var _app;

/**
 * Init all submodule of the app
 * @return {function} Instance of the app with all configurations loaded
 */
function init(){

	//Create an instance of express
	_app = express();

	//Load app helpers
	load.paths(_app, _config, [
		'helpers'
	]);

	//Init template engine
	engine.init(_app, _config);

	//Init settings
	settings.init(_app, _config);

	//Init express middlewares
	middlewares.init(_app, _config);

	//Load app models, middlewares, controllers an routes
	load.paths(_app, _config, [
		'models',
		'middlewares',
		'controllers',
		'routes'
	]);

	//Set errors
	errors.init(_app, _config);

	//Winston
	winston.init(_app, _config);

	//Start
	_app.listen(_config.app.port);

	//Log in the console
	_log();

	//Return this instance
	return _app;

}

/**
 * Log the start of the app
 */
function _log(){

	console.log('\n==============================');
	console.log('Rodati');
	console.log('Started on port: ' + _config.app.port);
	console.log('Enviroment: ' + _app.get('env'));
	console.log('==============================\n');

}

/**
 * Public methods exported
 */
module.exports = {
    init: init
};
