'use strict';

module.exports = function(grunt) {

	var cssPath = 'public/css/';

	var config = {
		options: {
			outputStyle: 'nested',
			imagePath: '../images'
		}
	};

	grunt.file.recurse(cssPath, function(abspath, rootdir, subdir) {

		if(subdir !== undefined && subdir.indexOf('/') === -1 && subdir !== 'vendor'){

			var section = subdir;

			config[section] = {
				files: {}
			};

			config[section].files[cssPath + subdir + '.css'] = [cssPath + subdir + '/index.scss'];

		}

	});

	grunt.event.on('watch', function(action, filepath) {

		if(filepath.indexOf(cssPath) > -1){

			var section = (filepath.split(cssPath)[1]).split('/')[0];

			if(config.hasOwnProperty(section) === true){

				var runConfig = {};

				runConfig[section] = config[section];

				grunt.config('sass', runConfig);

			}

		}

	});

	return config;

};
