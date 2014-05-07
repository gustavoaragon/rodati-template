'use strict';

//Main dependencies
var nconf = require('nconf');

//Set configuration
var env   = process.env.NODE_ENV || 'development';

module.exports = function (root) {

    nconf.argv().env().file({ file: root + '/server/config/' + env + '.json' });
    nconf.set('app:paths', {
        'root': root,
        'models': root + '/server/models',
        'controllers': root + '/server/controllers',
        'helpers': root + '/server/helpers',
        'middlewares': root + '/server/middlewares',
        'libraries': root + '/server/libraries',
        'routes': root + '/server/routes',
        'views': root + '/server/views',
        'public': root + '/public'
    });

};