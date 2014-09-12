'use strict';

/**
 * Global modules
 */
var nconf = require('nconf');

/**
 * Private variables
 */
var _config = nconf.get();

/**
 * Init the middleware setting some HTTP headers
 * @param  {object}   req  Request object
 * @param  {object}   res  Response object
 * @param  {function} next Connection callback
 */
function init(req, res, next){

	//Set the version of the app
	res.header('app-version', _config.app.version);

	//Continue the chain
	next();

}

/**
 * Public methods exported
 */
module.exports = {
	init: init
};
