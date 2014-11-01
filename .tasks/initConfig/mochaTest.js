'use strict';

module.exports = function() {

	return {
		default: {
			options: {
				reporter: 'spec',
				timeout: 5000
			},
			src: ['test/unit/**/*.js']
		}
	};

};
