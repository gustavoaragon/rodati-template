'use strict';

module.exports = function(grunt) {

	var path = 'public/js/';

	var config = {};

	if(grunt.file.exists(path)){

		config = {
			options: {
				watch: true
			}
		};

		grunt.file.recurse(path, function(abspath, rootdir, subdir) {

			if(subdir !== undefined && subdir.indexOf('/') === -1 && subdir !== 'vendor'){

				var section = subdir;

				config[section] = {
					options: {
						browserifyOptions: {
							standalone: subdir
						}
					},
					files: {}
				};

				config[section].files[path + subdir + '.js'] = [path + subdir + '/index.js'];

			}

		});

		grunt.event.on('watch', function(action, filepath) {

			if(filepath.indexOf(path) > -1){

				var section = (filepath.split(path)[1]).split('/')[0];
				var runConfig = {};
				runConfig[section] = config[section];

				grunt.config('browserify', runConfig);

			}

		});

	}

	return config;

};
