'use strict';

/**
 * Enable and configure New Relix
 * @param  {object} app    Express instance
 * @param  {object} config Object with the configuration of the app
 */
function init(app, config){

	//Enable New Relic based on the configuration
	if (config.app.newrelic.enabled === true) {

		var newrelic = require('newrelic');

		//Add New Relic as local
		app.locals.newrelic = newrelic;

	}

}

/**
 * Public methods exported
 */
module.exports = {
    init: init
};
