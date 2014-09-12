'use strict';

/**
 * Determine the JS to use depending on the enviroment of the app
 * @param  {object} dust   Dust intance of the app
 * @param  {object} config Configuration of the app
 * @return {string}        <script src="<src>"></script>
 */
module.exports = function(dust, config) {

	dust.helpers.js = function(chunk, context, bodies, params) {

		var src = config.NODE_ENV === 'development' ? params.src : params.src.replace('.js', '.min.js');

		return chunk.write('<script src="' + src + '"></script>');

	};

};
