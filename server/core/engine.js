'use strict';

//Main dependencies
var dust = require('adaro');

exports.init = function(app, config) {

	//Set view engine
	app.engine('dust', dust.dust({
		'cache': false
	}));

	app.set('view engine', 'dust');

	//White space supression
	if (config.app.views.ws === false) {

		dust.optimizers.format = function(ctx, node) {
			return node;
		};

	}

};
