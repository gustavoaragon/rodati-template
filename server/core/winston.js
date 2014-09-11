/*eslint no-unused-vars:0*/

'use strict';

//Main dependencies
var winston = require('winston');
var winstonNewrelic = require('winston-newrelic');

exports.init = function(app, config) {

	//Remove the default transport
	winston.remove(winston.transports.Console);

	//Set logging using the console
	winston.add(winston.transports.Console, config.app.logger.console);

	//Set logging into the filesystem
	winston.add(winston.transports.File, config.app.logger.file);

	//Enable newrelic loggin based on the configuration
	if (config.app.newrelic.enabled === true) {

		winston.add(winston.transports.newrelic, {
			newrelic: require('newrelic')
		});
	
	}

};
