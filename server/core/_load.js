'use strict';

/**
 * Global modules
 */
var load = require('express-load');

/**
 * Private variables
 */
var _loadConfig = {
	cwd: 'server',
	ignore: '_'
};

/**
 * Load the paths of the application into the app instance
 * @param  {object} app    Express instance
 * @param  {object} config Object with the configuration of the app
 * @param  {array} paths  Paths to load
 */
function paths(app, config, paths){

	//Load each path
	paths.forEach(function(path){

		load(path, _loadConfig).into(app);

	});

}

/**
 * Public methods exported
 */
module.exports = {
    paths: paths
};
