'use strict';

/**
 * Global modules
 */
var winston = require('winston');

/**
 * Function to test if a string is a valid JSON
 * @see http://stackoverflow.com/a/20392392
 * @param {string}   jsonString String representation of the JSON to try to parse
 * @return {object|bool} If is valid, return the JSON parsed, else false
 */
function parse(jsonString) {

	//Check that the parameter is a string
	if (typeof jsonString === 'string' || jsonString instanceof String) {

		try {

			var o = JSON.parse(jsonString);

			if (o && typeof o === 'object' && o !== null) {
				return o;
			}

		} catch (e) {

			winston.error(e.stack);

			return false;

		}

	//Else, skip and return the object
	} else {

		winston.warn('The parameter is not a string to parse');

		return jsonString;

	}

}

/**
 * Public methods exported
 */
module.exports = {
	parse: parse
};
