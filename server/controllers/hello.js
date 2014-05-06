//Main dependencies
var q       = require('q');
var async   = require('async');
var _       = require('lodash');
var winston = require('winston');
var nconf   = require('nconf');

//Config
var config = nconf.get();
var paths  = config.app.paths;

//Loader
var loader  = require(paths.libraries + '/loader');

//Index
exports.index = function (req, res) {

    winston.info('Hello index');

    res.send('index');

}

//World
exports.world = function (req, res) {

    res.render('hello/world');

}

//Team
exports.team = function (req, res) {

    var model = loader.model('team');

    res.send(model);

}