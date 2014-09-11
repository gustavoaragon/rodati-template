'use strict';

//Condition block depending the environment
module.exports = function(dust, config) {

	dust.helpers.environment = function(chunk, context, bodies, params) {

		var output = '';

		//If the param has the current environment
		if (params.env.indexOf(config.NODE_ENV) > -1) {

			chunk.tap(function(data) {
				output += data;
				return '';
			}).render(bodies.block, context).untap();

		}

		return chunk.write(output);

	};

};
