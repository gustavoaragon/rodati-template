'use strict';

module.exports = function() {

	return {
		options: {
			spawn: false
		},
		scripts: {
			files: ['public/js/**/*.js', '!public/js/*.js'],
			tasks: ['browserify']
		},
		stylesheets: {
			files: ['public/css/**/*.scss', '!public/css/*.css'],
			tasks: ['sass']
		}
	};

};
