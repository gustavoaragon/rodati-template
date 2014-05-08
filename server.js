'use strict';

//Enviroment
var env   = process.env.NODE_ENV || 'development';

//Configuration
var path  = require('path');
var fs    = require('fs');
var nconf = require('nconf');
var root  = path.normalize(__dirname);
var file  = root + '/server/config/' + env + '.json';

//Check if exist the configuration file
fs.exists(file, function(exists) {

    if(exists) {

        //Set the configuration
        nconf.argv().env().file({ file: file });
        nconf.set('app:paths', {
            'root': root,
            'server': root + '/server',
            'public': root + '/public'
        });
        nconf.set('app:port', (Number(process.env.PORT) || nconf.get('app:port')));

        //Server
        module.exports = require(root + '/server/libraries/express')();

    } else {

        var err = new Error('Configuration file not found. Check the config folder.');

        throw err;

    }

});