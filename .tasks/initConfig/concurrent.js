'use strict';

module.exports = function() {

	return {
		options: {
			logConcurrentOutput: true
		},
		dev: {
			tasks: ['nodemon:dev', 'watch']
		},
		debug: {
			tasks: ['node-inspector:debug', 'nodemon:debug', 'watch']
		}
	};

};
