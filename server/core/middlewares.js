'use strict';

//Main dependencies
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var compression = require('compression');
var favicon = require('serve-favicon');

exports.init = function(app, config) {

	//Gzip
	app.use(compression());

	//Public
	app.use(express.static(config.app.paths.public));
	
	//Cookie parser
	app.use(cookieParser(config.app.secret));

	//Parse request bodies
	app.use(bodyParser.json());

	//Session support
	app.use(session({
		secret: config.app.secret,
		resave: true,
		saveUninitialized: true
	}));

	//Favicon
	app.use(favicon(config.app.paths.public + '/images/favicon.ico'));

	//HTTP logger
	app.use(morgan(config.app.logger.http));

};