'use strict';

module.exports = function() {

	return {
		init: [[
			'checkDependencies:default',
			'express:init'
		]],
		setup: [[
			'githooks'
		]],
		dev: [[
			'checkDependencies:default',
			'concurrent:dev'
		]],
		debug: [[
			'checkDependencies:default',
			'concurrent:debug'
		]],
		optimize: [[
			'uglify:default',
			'cssmin:default'
		]],
		lint: [[
			'eslint:default'
		]],
		test: [[
			'checkDependencies:default',
			'express:test',
			'casper:default',
			'mochaTest:default'
		]]
	};

};
