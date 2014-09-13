'use strict';

/**
 * Global modules
 */
var newrelic = require('newrelic');

/**
 * Init the controller
 * @param  {object} req Request object
 * @param  {object} res Response object
 */
function init(req, res){

	//Log in New Relic for monitoring
	newrelic.setTransactionName('about');

	//Init the model team
	var Team = req.app.models.team.init;

	//Create a new instance
	var developers = new Team();

	//Name for the team
	developers.schema.name = 'Monkeys';

	//Members of the team
	developers.schema.members = ['Ezequiel', 'Pablo', 'Gastón', 'Mathias', 'Leandro', '...'];

	//Render the view passing a model
	res.render('about/index', {
		developers: developers.schema
	});

}

/**
 * Public methods exported
 */
module.exports = {
    init: init
};
