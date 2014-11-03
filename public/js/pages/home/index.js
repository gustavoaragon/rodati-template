'use strict';

/**
 * Global modules
 */
var path = require('path');

/**
 * Private variables
 */
var _path = path.join(__dirname, 'index.js');

/**
 * A simple function that log in the console
 */
function init(){
	console.log('Welcome to Rodati template! Take a look in ' + _path + ' to know more!');
}

/**
 * Public methods exported
 */
module.exports = {
	init: init
};
