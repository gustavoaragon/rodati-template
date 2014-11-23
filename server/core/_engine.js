'use strict';

/**
 * Global modules
 */
var dust = require('adaro');

/**
 * Set the view engine to use by the app
 * @param  {object} app    Express instance
 * @param  {object} config Object with the configuration of the app
 */
function init(app, config){

	//Set view engine configuration
	app.engine('dust', dust.dust({
		'cache': config.app.views.cache
	}));

	//Set the engine into the app
	app.set('view engine', 'dust');

	//Init dust helpers
	app.helpers.dust.index.init(dust, config);

	//Compress o no compress the HTML (white space supression)
	if (config.app.views.ws === false) {

		dust.optimizers.format = function(ctx, node) {
			return node;
		};

	}

}

/**
 * Public methods exported
 */
module.exports = {
    init: init
};
