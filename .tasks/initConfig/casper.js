'use strict';

module.exports = function() {

	return {
		default: {
			options: {
				test: true
			},
			src: ['test/functional/*.js', 'test/functional/**/*.js']
		}
	};

};
