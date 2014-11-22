'use strict';

/**
 * Global modules
 */
var winston = require('winston');
var newrelic = require('newrelic');
var util = require('util');
var raygun = require('raygun');

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

	//Set Raygun as transport
	_raygunLogger(config.raygun);

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

		//Little hack to set the original stacktrace
		var msgList = msg.split('\n');
		var err = new Error(msgList[0]);
		err.stack = msgList.join('\n');

		//Send the error to New Relic
		newrelic.noticeError(err, meta);

		//Next
		callback(null, true);

	};

	//Add to winston
	winston.add(winston.transports.newrelic);

}

/**
 * Create a new transport to log all the errors in Raygun
 * @param  {object} config Configuration for Raygun
 * @see https://github.com/flatiron/winston#adding-custom-transports
 */
function _raygunLogger(config) {

	var raygunClient = new raygun.Client().init(config);
	//Create the transport
	var logger = winston.transports.raygun = function() {
		this.name = 'raygun';
		this.level = 'error';
	};

	//Inherits
	util.inherits(logger, winston.Transport);

	//Behavior when a new log is comming
	logger.prototype.log = function(level, msg, meta, callback) {

		if(config.enabled){

			//Little hack to set the original stacktrace
			var msgList = msg.split('\n');
			var err = new Error(msgList[0]);
			err.stack = msgList.join('\n');

			//Send the error to raygun
			raygunClient.send(err, meta);

		}

		//Next
		callback(null, true);

	};

	//Add to winston
	winston.add(winston.transports.raygun);

}

/**
 * Public methods exported
 */
module.exports = {
    init: init
};
