/*eslint no-unused-vars:0*/

'use strict';

/**
 * Global modules
 */
var winston = require('winston');
var winstonNewrelic = require('winston-newrelic');

/**
 * Add transports to Winston depending on the configuration
 * @param  {object} app    Express instance
 * @param  {object} config Object with the configuration of the app
 */
function init(app, config){

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

}

/**
 * Public methods exported
 */
module.exports = {
    init: init
};
