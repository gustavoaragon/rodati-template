'use strict';

module.exports = function(grunt) {

	var config = {
		options: {
			ignore: [
				'node_modules/',
				'public/',
				'grunt/',
				'.git',
				'.grunt/'
			],
			ext: 'js,json',
			callback: function(nodemon) {
				nodemon.on('restart', function() {
					setTimeout(function() {
						require('fs').writeFileSync('.rebooted', 'rebooted');
					}, 1000);
				});
			}
		}
	};

	config.dev = {
		script: 'server.js'
	};
	config.debug = {
		script: 'server.js'
	};

	if(grunt.cli.tasks[0] === 'nodemon:debug'){
		config.debug.options = {};
		config.debug.options.nodeArgs = ['--debug'];
	}

	return config;

};
