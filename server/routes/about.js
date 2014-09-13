'use strict';

module.exports = function(app) {

	//About Route. Note the use of a middleware before the controller
	app.get('/about', app.middlewares.headers.init, app.controllers.about.index.init);

};
