'use strict';

//JS management
module.exports = function(dust, config) {

	dust.helpers.js = function(chunk, context, bodies, params) {

		var src = config.NODE_ENV === 'development' ? params.src : params.src.replace('.js', '.min.js');

		return chunk.write('<script src="' + src + '"></script>');

	};

};
