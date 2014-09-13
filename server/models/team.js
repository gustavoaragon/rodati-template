'use strict';

/**
 * Private variables
 */
var _schema = {
	'name': null,
	'members': []
};

/**
 * Constructor for the model
 */
function init(){

	//Set the schema
	this.schema = _schema;

}

/**
 * Public methods exported
 */
module.exports = {
	init: init
};
