'use strict';

/**
 * Determine the CSS to use depending on the enviroment of the app
 * @param  {object} dust   Dust intance of the app
 * @param  {object} config Configuration of the app
 * @return {string}        <link href="<href>"" rel="<rel>" media="<media>">
 */
module.exports = function(dust, config) {

	dust.helpers.css = function(chunk, context, bodies, params) {

		var href = config.NODE_ENV === 'development' ? params.href : params.href.replace('.css', '.min.css');
		var rel = params.rel;
		var media = params.media;

		return chunk.write('<link href="' + href + '" rel="' + rel + '" media="' + media + '">');

	};

};
