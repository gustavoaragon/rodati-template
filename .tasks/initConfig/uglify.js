'use strict';

module.exports = function(grunt) {

	return {
		default: {
			files: grunt.file.expandMapping(['public/js/pages/*.js', '!public/js/pages/*.min.js', 'public/js/vendor/*.js', '!public/js/vendor/*.min.js'], '.', {
				ext: '.min.js',
				extDot: 'last'
			})
		}
	};

};
