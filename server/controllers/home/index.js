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
	newrelic.setTransactionName('home');

	//Example of use of winston
	winston.info('Rendering home view');

	//Render the view
	res.render('home/index');

}

/**
 * Public methods exported
 */
module.exports = {
    init: init
};
