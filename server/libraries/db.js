'use strict';

//Main dependencies
var Schema  = require('jugglingdb').Schema;
var nconf   = require('nconf');
var winston = require('winston');

//Config
var config  = nconf.get();
var dbs     = config.dbs;

//Drivers
var mongo   = new Schema('mongodb', dbs.mongodb);

//Events
mongo.on('connected', function() {
    winston.log('info', 'Connected to ' + dbs.mongodb.host + ':' + dbs.mongodb.port + '/' + dbs.mongodb.database);
});

mongo.on('log', function(msg, duration) {
    winston.log('info', msg + ' - ' + duration);
});

exports.mongo = function () {
    return mongo;
};
