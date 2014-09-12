'use strict';

/**
 * Conditional block depending the environment of the app
 * @param  {object} dust   Dust intance of the app
 * @param  {object} config Configuration of the app
 * @return {string}        The block of code to show
 */
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
