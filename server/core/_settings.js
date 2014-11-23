'use strict';

/**
 * Global modules
 */
var path = require('path');

/**
 * Add the setting to the app
 * @param  {object} app    Express instance
 * @param  {object} config Object with the configuration of the app
 */
function init(app, config){

	//Folder with the views
	app.set('views', path.join(config.app.paths.server, 'views'));

}

/**
 * Public methods exported
 */
module.exports = {
    init: init
};
