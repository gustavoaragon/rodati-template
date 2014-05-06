//Main dependencies
var nconf  = require('nconf');

//Config
var config = nconf.get();
var paths  = config.app.paths;

//Loader
var loader = require(paths.libraries + '/loader');

//Export
module.exports = function (app) {

    //Index
    app.get('/', loader.controller('hello').index);

    //Hello
    app.get('/hello', loader.controller('hello').world);

    //Team
    app.get('/team', loader.middleware('version'), loader.controller('hello').team);

};