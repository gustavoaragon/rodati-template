'use strict';

/**
 * Private variables
 */
var _console = window.console || false;

/**
 * Safe console.log
 * @param  {string} msg Message to log
 */
function log(msg){

	//Check if the console object exists
	if(_console){

		//Log
		_console.log(msg);

	}

}

/**
 * Public methods exported
 */
module.exports = {
	log: log
};
