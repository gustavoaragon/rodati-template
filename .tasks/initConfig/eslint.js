'use strict';

module.exports = function() {

	return {
		default: {
			files: {
				src: ['*.js', 'server/**/*.js', 'public/js/**/*.js', 'test/**/*.js', '!public/js/*.js', '!public/js/vendor/*.js']
			}
		}
	};

};
