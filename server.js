'use strict';

//App root
var path  = require('path');
var root  = path.normalize(__dirname);

//Init
require(root + '/server/libraries/init')(root);

//Server
module.exports = require(root + '/server/libraries/express')();