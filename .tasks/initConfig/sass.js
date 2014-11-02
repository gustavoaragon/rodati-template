'use strict';

module.exports = function(grunt) {

	var path = 'public/css/';

	var config = {};

	//Check that the CSS folder exists
	if(grunt.file.exists(path)){

		//Configuration for each page
		grunt.file.recurse(path + 'pages', function(abspath, rootdir, subdir) {

			//Create only for the first folder in the root
			if(subdir !== undefined && subdir.indexOf('/') === -1){

				var page = subdir;

				config['pages/' + page] = {
					//For some reason, the configuration need to be in each object
					options: {
						imagePath: '../images',
						outputStyle: 'nested',
						includePaths: ['./public/css/includes']
					},
					files: {}
				};

				config['pages/' + page].files[path + 'pages/' + subdir + '.css'] = [path + 'pages/' + subdir + '/index.scss'];

			}

		});

		//On watch event
		grunt.event.on('watch', function(action, filepath) {

			if(filepath.indexOf(path) > -1){

				var folders = (filepath.split(path)[1]).split('/');

				var section = folders[0];

				if(section === 'pages'){

					var page = folders[1];

					if(config.hasOwnProperty('pages/' + page) === true){

						var runConfig = {};

						runConfig['pages/' + page] = config['pages/' + page];

						grunt.config('sass', runConfig);

					}

				}

			}

		});

	}

	return config;

};
