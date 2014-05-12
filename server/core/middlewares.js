'use strict';

//Main dependencies
var express      = require('express');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var cookieParser = require('cookie-parser');
var morgan       = require('morgan');
var compression  = require('compression');
var favicon      = require('serve-favicon');

exports.init = function (app, config) {

    //Favicon
    app.use(favicon(config.app.paths.public + '/images/favicon.ico'));

    //Parse request bodies
    app.use(bodyParser());

    //HTTP logger
    app.use(morgan(config.app.logger.level));

    //Gzip
    app.use(compression());

    //Session support
    app.use(cookieParser(config.app.secret));
    app.use(session());

    //Public
    app.use(express.static(config.app.paths.public));

}