'use strict';

/**
 * Global modules
 */
var fs = require('fs');
var path = require('path');
var _ = require('lodash');

/**
 * Private variables
 */
var _globals = {};

/**
 * Set the global variables available throw the app
 * @param  {object} app    Express instance
 * @param  {object} config Object with the configuration of the app
 */
function init(app, config){

	//Init some globals
	_globals.app = app;

	//Load the libs
	_libs(config);

	//Check if there are globals to inyect
	if(_.isEmpty(_globals) === false){

		//Inyect in the global scope
		Object.keys(_globals).forEach(function(key){

			GLOBAL[key] = _globals[key];

		});

	}

}

/**
 * Load the libs into the global object
 * @param  {object} config Object with the configuration of the app
 */
function _libs(config){

	var folder = path.join(config.app.paths.server, 'libs');

	//Check if the lib folder exists
	if(fs.existsSync(folder)){

		//Read each file synchronously
		fs.readdirSync(folder).forEach(function(file) {

			//Lib path
			var lib = path.join(folder, file, 'index.js');

			//If is a folder and has an index.js
			if(fs.existsSync(lib)){

				//Load in the global object
				_globals[file] = require(lib);

			}

		});

	}

}

/**
 * Public methods exported
 */
module.exports = {
    init: init
};
