'use strict';

module.exports = function(grunt) {

	var jsPath = 'public/js/';

	var config = {
		options: {
			watch: true
		}
	};

	grunt.file.recurse(jsPath, function(abspath, rootdir, subdir) {

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

			config[section].files[jsPath + subdir + '.js'] = [jsPath + subdir + '/index.js'];

		}

	});

	grunt.event.on('watch', function(action, filepath) {

		if(filepath.indexOf(jsPath) > -1){

			var section = (filepath.split(jsPath)[1]).split('/')[0];
			var runConfig = {};
			runConfig[section] = config[section];

			grunt.config('browserify', runConfig);

		}

	});

	return config;

};
