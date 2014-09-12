'use strict';

/**
 * Global modules
 */
var fs = require('fs');
var path = require('path');
var nconf = require('nconf');

/**
 * Private variables
 */
var _env = process.env.NODE_ENV || 'development';
var _root = path.normalize(__dirname);
var _config = _root + '/server/config/' + _env + '.json';
var _version = require(_root + '/package.json').version;

/**
 * Init the application if all conditions are availables
 */
function init(){

	//Check if the configuration file of the current environment exists
	fs.exists(_config, function(exists) {

		if (exists) {

			//Set the configuration file
			nconf.argv().env().file({
				file: _config
			});

			//Set the version of the app
			nconf.set('app:version', _version);

			//Set the main paths of the app
			nconf.set('app:paths', {
				'root': _root,
				'server': _root + '/server',
				'public': _root + '/public'
			});

			//Set the port of the app
			nconf.set('app:port', (Number(process.env.PORT) || nconf.get('app:port')));

			//Export the intance of the app
			module.exports = require(_root + '/server/core/app')();

		//If the config file doen't exists, throw an error
		} else {

			var err = new Error('Configuration file not found. Check the config folder.');

			throw err;

		}

	});

}

//Init the app
init();
