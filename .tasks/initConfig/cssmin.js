'use strict';

module.exports = function(grunt) {

	return {
		default: {
			files: grunt.file.expandMapping(['public/css/pages/*.css', 'public/css/vendor/*.css', '!public/css/pages/*.min.css', '!public/css/vendor/*.min.css'], '.', {
				ext: '.min.css',
				extDot: 'last'
			})
		}
	};

};
