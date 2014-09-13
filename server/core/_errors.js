'use strict';

/**
 * Global modules
 */
var winston = require('winston');
var newrelic = require('newrelic');

/**
 * Initialize the handlers for pages with HTTP errors
 * @param  {object} app    Express instance
 */
function init(app){

	//404 error
	app.use(function(req, res) {

		//Log in New Relic for monitoring
		newrelic.setTransactionName('404');

		//Notice the error to New Relic
		winston.error('Page not found', req.headers);

		//Set the status
		res.status(404);

		//Respond with html page
		if (req.accepts('html')) {
			res.render('errors/404', {
				url: req.url
			});
			return;
		}

		//Respond with json
		if (req.accepts('json')) {
			res.send({
				error: 'Not found'
			});
			return;
		}

		//Default to plain-text. send()
		res.type('txt').send('Not found');

	});

	//500 error
	app.use(function(err, req, res) {

		//Get the status of the error
		var status = err.status || 500;

		//Log in New Relic for monitoring
		newrelic.setTransactionName(status);

		//Notice the error to New Relic
		newrelic.noticeError('HttpError ' + status, req.headers);

		//Set the status
		res.status(status);

		res.render('errors/500', {
			error: err
		});

	});

}

/**
 * Public methods exported
 */
module.exports = {
    init: init
};
