'use strict';

/**
 * Global modules
 */
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var compression = require('compression');
var favicon = require('serve-favicon');
var fs = require('fs');
var flash = require('flashify');

/**
 * Add some middlewares (with their configuration) for the app
 * @param  {object} app    Express instance
 * @param  {object} config Object with the configuration of the app
 */
function init(app, config){

	//Gzip
	app.use(compression());

	//Public
	app.use(express.static(config.app.paths.public));

	//Cookie parser
	app.use(cookieParser(config.app.secret));

	//Parse request bodies
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));

	//Session support
	app.use(session({
		secret: config.app.secret,
		resave: true,
		saveUninitialized: true
	}));

	//Favicon - Check if exists, else create an empty buffer
	var faviconPath = config.app.paths.public + '/images/favicon.ico';
	app.use(favicon(fs.existsSync(faviconPath) ? faviconPath : new Buffer(1)));

	//HTTP logger
	app.use(morgan(config.logger.http));

	//Flash messages
	app.use(flash);

}

/**
 * Public methods exported
 */
module.exports = {
    init: init
};
