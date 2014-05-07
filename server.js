'use strict';

//Enviroment
var env   = process.env.NODE_ENV || 'development';

//Configuration
var path  = require('path');
var nconf = require('nconf');
var root  = path.normalize(__dirname);
nconf.argv().env().file({ file: root + '/server/config/' + env + '.json' });
nconf.set('app:paths', {
    'root': root,
    'server': root + '/server',
    'public': root + '/public'
});

//Server
module.exports = require(root + '/server/libraries/express')();