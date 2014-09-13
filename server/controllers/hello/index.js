'use strict';

/**
 * Global modules
 */
var winston = require('winston');
var newrelic = require('newrelic');

/**
 * Init the controller
 * @param  {object} req Request object
 * @param  {object} res Response object
 */
function init(req, res){

	//Log in New Relic for monitoring
	newrelic.setTransactionName('hello');

	//Example of use of winston
	winston.info('This message is logged using winston');

	//Render the view
	res.render('hello/index');

}

/**
 * Public methods exported
 */
module.exports = {
    init: init
};
