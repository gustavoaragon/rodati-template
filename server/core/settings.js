'use strict';

exports.init = function(app, config) {

	//Views folder
	app.set('views', config.app.paths.server + '/views');

};
