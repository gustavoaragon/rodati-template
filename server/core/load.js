'use strict';

//Main dependencies
var load = require('express-load');

exports.init = function(app, config, skeleton) {

	var loadConfig = {
		cwd: 'server',
		ignore: '_'
	};

	//Load each path
	skeleton.forEach(function(path){

		load(path, loadConfig).into(app);

	});

};
