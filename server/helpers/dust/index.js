'use strict';

/**
 * Global modules
 */
var path = require('path');
var fs = require('fs');

/**
* This method when is invoked read all the JS files of the 
* current directory and execute each module/file
* @param  {object} dust dust instance to add new helpers
* @param  {object} config JSON with the configuration of the app
*/
function init(dust, config){

	//Read each file synchronously
	fs.readdirSync(path.join(__dirname, '/')).forEach(function(file) {

		//If the file is a .js and not this file
		if (file.match(/.+\.js/g) !== null && file !== 'index.js') {

			//Execute every file
			require('./' + file)(dust, config);

		}

	});

}

/**
 * Public methods exported
 */
module.exports = {
    init: init
};
