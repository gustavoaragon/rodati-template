'use strict';

module.exports = function(grunt) {

	return {
		default: {
			files: grunt.file.expandMapping(['public/js/pages/*.js', '!public/js/pages/*.min.js', 'public/js/vendor/*.js', '!public/js/vendor/*.min.js'], '.', {
				rename: function(destBase, destPath) {
					return destPath.replace('.js', '.min.js');
				}
			})
		}
	};

};
