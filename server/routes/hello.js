'use strict';

module.exports = function(app) {

	//Index Route. This path call the controller hello, method init
	app.get('/', app.controllers.hello.index.init);

};
