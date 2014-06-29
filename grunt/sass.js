module.exports = function(grunt, options) {

	return {

		'rodati': {

			options: {
				outputStyle: 'nested',
				imagePath: '../images'
			},

			files: grunt.file.expandMapping(
			['public/sass/*.scss'], '.', {
				ext: '.css',
				rename: function(destBase, destPath) {
					return destPath.replace('sass', 'css');
				}
			})
		}
	};

};