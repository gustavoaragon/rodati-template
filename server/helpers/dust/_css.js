'use strict';

//CSS management
module.exports = function(dust, config) {

	dust.helpers.css = function(chunk, context, bodies, params) {

		var href = config.NODE_ENV === 'development' ? params.href : params.href.replace('.css', '.min.css');
		var rel = params.rel;
		var media = params.media;

		return chunk.write('<link href="' + href + '" rel="' + rel + '" media="' + media + '">');

	};

};
