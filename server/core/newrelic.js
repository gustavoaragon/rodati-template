'use strict';

exports.init = function (app, config) {

    //Enable newrelic based on the configuration
    if(config.app.logger.newrelic === true){

        require('newrelic');

    }

}