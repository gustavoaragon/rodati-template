'use strict';

/**
 * Global modules
 */
var winston = require('winston');
var newrelic = require('newrelic');
var util = require('util');

/**
 * Add transports to Winston depending on the configuration
 * @param  {object} app    Express instance
 * @param  {object} config Object with the configuration of the app
 */
function init(app, config){

	//Remove the default transport
	winston.remove(winston.transports.Console);

	//Set logging using the console
	winston.add(winston.transports.Console, config.logger.console);

	//Set logging into the filesystem
	winston.add(winston.transports.File, config.logger.file);

	//Set New Relic as transport
	_newrelicLogger();

}

/**
 * Create a new transport to log all the errors in New Relic
 * @see https://github.com/flatiron/winston#adding-custom-transports
 */
function _newrelicLogger(){

	//Create the transport
	var logger = winston.transports.newrelic = function () {
		this.name = 'newrelic';
		this.level = 'error';
	};

	//Inherits
	util.inherits(logger, winston.Transport);

	//Behavior when a new log is comming
	logger.prototype.log = function (level, msg, meta, callback) {

		//Send the error to New Relic
		newrelic.noticeError(new Error(msg), meta);

		//Next
		callback(null, true);

	};

	//Add to winston
	winston.add(winston.transports.newrelic);

}

/**
 * Public methods exported
 */
module.exports = {
    init: init
};
