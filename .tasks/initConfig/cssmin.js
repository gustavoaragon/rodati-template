'use strict';

module.exports = function(grunt) {

	return {
		default: {
			files: grunt.file.expandMapping(['public/css/*.css', '!public/css/*.min.css'], '.', {
				ext: '.min.css'
			})
		}
	};

};
