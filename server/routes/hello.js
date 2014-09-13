'use strict';

module.exports = function(app) {

	//Index Route. Note the use of a middleware before the controller
	app.get('/', app.middlewares.headers.init, app.controllers.hello.index.init);

};
