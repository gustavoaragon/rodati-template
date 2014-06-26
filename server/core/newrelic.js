'use strict';

exports.init = function (app, config) {

    //Enable newrelic based on the configuration
    if(config.app.newrelic.enabled === true){

        var newrelic = require('newrelic');
        app.locals.newrelic = newrelic;

    }

};