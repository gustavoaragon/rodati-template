module.exports = {

	'lint': {

		'pre-commit': {
			taskNames: 'lint',
			template: './grunt/githooks/pre-commit-lint.hbs',
			startMarker: '// GRUNT LINT START',
			endMarker: '// GRUNT LINT END'
		}

	},

	'optimize': {

		'pre-commit': {
			taskNames: 'optimize',
			template: './grunt/githooks/pre-commit-optimize.hbs',
			startMarker: '// GRUNT OPTIMIZE START',
			endMarker: '// GRUNT OPTIMIZE END'
		}
	
	}

};