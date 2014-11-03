'use strict';

module.exports = function() {

	return {
		options: {
			spawn: false
		},
		scripts: {
			files: ['public/js/pages/**/*.js', '!public/js/pages/*.js']
		},
		stylesheets: {
			files: ['public/css/pages/**/*.scss', '!public/css/pages/*.css']
		}
	};

};
