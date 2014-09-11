'use strict';

//Export
module.exports = function(app) {

	//Index
	app.get('/', app.controllers.hello.index.init);

};
