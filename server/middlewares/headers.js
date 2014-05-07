'use strict';

//Main dependencies
var nconf        = require('nconf');

//Config
var config       = nconf.get();

//Package
var pjson = require(config.app.paths.root + '/package.json');

//Set the version of the app
exports.version = function(req, res, next) {

	res.header('app-version', pjson.version);

	next();

};
