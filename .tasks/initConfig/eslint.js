'use strict';

module.exports = function() {

	return {
		default: {
			files: {
				src: ['*.js', 'server/**/*.js', 'public/js/pages/**/*.js', 'public/js/includes/**/*.js', 'test/**/*.js', '!public/js/pages/*.js', '!public/js/vendor/*.js']
			}
		}
	};

};
