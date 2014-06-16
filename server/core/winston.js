'use strict';

//Main dependencies
var winston = require('winston');

exports.init = function (app, config) {

    //Remove the default transport
    winston.remove(winston.transports.Console);

    //Set logging using the console
    winston.add(winston.transports.Console, config.app.logger.console);

    //Set logging into the filesystem
    winston.add(winston.transports.File, config.app.logger.file);

}
