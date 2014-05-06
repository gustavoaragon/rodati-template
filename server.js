//App root
var path  = require('path');
var root  = path.normalize(__dirname);

//Init
require(root + '/server/libraries/init')(root);

//Server
require(root + '/server/libraries/express')();