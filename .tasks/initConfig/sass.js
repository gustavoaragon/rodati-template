'use strict';

module.exports = function(grunt) {

	var path = 'public/css/';

	var config = {};

	if(grunt.file.exists(path)){

		config = {
			options: {
				outputStyle: 'nested',
				imagePath: '../images'
			}
		};

		grunt.file.recurse(path, function(abspath, rootdir, subdir) {

			if(subdir !== undefined && subdir.indexOf('/') === -1 && subdir !== 'vendor'){

				var section = subdir;

				config[section] = {
					files: {}
				};

				config[section].files[path + subdir + '.css'] = [path + subdir + '/index.scss'];

			}

		});

		grunt.event.on('watch', function(action, filepath) {

			if(filepath.indexOf(path) > -1){

				var section = (filepath.split(path)[1]).split('/')[0];

				if(config.hasOwnProperty(section) === true){

					var runConfig = {};

					runConfig[section] = config[section];

					grunt.config('sass', runConfig);

				}

			}

		});

	}

	return config;

};
