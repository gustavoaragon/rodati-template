module.exports = function (grunt, options) {

	return {

		'rodati': {

			files: grunt.file.expandMapping(
				['public/css/*.css', '!public/css/*.min.css'], '.', {
				ext: '.min.css'
			})

		}

	};

};