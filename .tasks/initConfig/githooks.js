'use strict';

module.exports = function() {

	return {
		'lint': {
			'pre-commit': {
				taskNames: 'lint',
				template: './.tasks/initConfig/githooks/pre-commit-lint.hbs',
				startMarker: '// GRUNT LINT START',
				endMarker: '// GRUNT LINT END'
			}
		},
		'optimize': {
			'pre-commit': {
				taskNames: 'optimize',
				template: './.tasks/initConfig/githooks/pre-commit-optimize.hbs',
				startMarker: '// GRUNT OPTIMIZE START',
				endMarker: '// GRUNT OPTIMIZE END'
			}
		}
	};

};
