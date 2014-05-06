//Main dependencies
var nconf = require('nconf');

//Config
var paths = nconf.get('paths');

//Export
module.exports = {

    helper: function (helper) {
        var helperPath = paths.helpers + '/' + helper;
        return require(helperPath);
    },

    model: function(model) {
        var modelPath = paths.models + '/' + model;
        return require(modelPath);
    },

    controller: function (controller) {
        var controllerPath = paths.controllers + '/' + controller;
        return require(controllerPath);
    },

    middleware: function (middleware) {
        var middlewarePath = paths.middlewares + '/' + middleware;
        return require(middlewarePath);
    }

};
