'use strict';

/**
 * Global modules
 */
var newrelic = require('newrelic');
var async = require('async');

/**
 * Private variables
 */
var _usernames = [
	'dzignus',
	'esculli',
	'poislagarde',
	'mathiasefron',
	'nelak'
];

/**
 * Init the controller
 * @param  {object} req Request object
 * @param  {object} res Response object
 */
function init(req, res){

	//Log in New Relic for monitoring
	newrelic.setTransactionName('about');

	//Team members
	var team = [];

	//Init the model member
	var Member = req.app.models.member.instance;

	//Create a member for each username
	async.each(_usernames, function(username, callback){

		//Create a new member instance
		var member = new Member(username);

		//Get the avatar of the user
		member.getAvatarUrl(function(avatar){

			//Push a new member
			team.push({
				username: member.username,
				profile: member.profile,
				avatar: avatar
			});

			//Next
			callback();

		});

	}, function(err){

		//Check errors
		if(err){

			//Render the error page
			res.render('error/500', {
				error: err
			});

		} else {

			//Render the view passing the model
			res.render('about/index', {
				team: team
			});

		}

	});

}

/**
 * Public methods exported
 */
module.exports = {
    init: init
};
