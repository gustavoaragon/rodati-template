'use strict';

/**
 * Set local variables to use across the app
 * @param  {object} app    Express instance
 * @param  {object} config Object with the configuration of the app
 */
function init(app, config){

	//Configuration
	app.locals.config = config.app;

}

/**
 * Public methods exported
 */
module.exports = {
    init: init
};
