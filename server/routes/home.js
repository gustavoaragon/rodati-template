'use strict';

module.exports = function(app) {

	//Index Route. This path call the controller home, method init
	app.get('/', app.controllers.home.index.init);

};
