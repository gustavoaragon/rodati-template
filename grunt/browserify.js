'use strict';

module.exports = function(grunt) {

	var config = {};

	grunt.file.recurse('public/js/modules/', function(abspath, rootdir, subdir) {

		if(subdir !== undefined){

			config[subdir] = {

				options: {
					bundleOptions: {
						standalone: subdir
					}
				},

				files: {}

			};

			config[subdir].files['public/js/' + subdir + '.js'] = ['public/js/modules/' + subdir + '/' + subdir + '.js'];

		}

	});

	return config;

};