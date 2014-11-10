'use strict';

/**
 * Global modules
 */
var path = require('path');

/**
 * Local modules
 */
var logger = require('logger');

/**
 * Private variables
 */
var _folder = path.join(__dirname, 'index.js');

/**
 * A simple function that log in the console
 */
function init(){
	logger.log('Welcome to Rodati template! Take a look in ' + _folder + ' to know more!');
}

/**
 * Public methods exported
 */
module.exports = {
	init: init
};
