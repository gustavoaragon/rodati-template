'use strict';

/**
 * Global modules
 */
var newrelic = require('newrelic');
var async = require('async');
var winston = require('winston');

/**
 * Private variables
 */
var _usernames = [
	'dzignus',
	'esculli',
	'poislagarde',
	'mathiasefron',
	'nelak',
	'LucianoGanga'
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
	var Member = app.models.member.instance;

	//Create a member for each username
	async.each(_usernames, function(username, callback){

		//Create a new member instance
		var member = new Member(username);

		//Get the avatar of the user
		member.getAvatarUrl(function(err, avatar){

			//Check errors
			if (err) {

				//Track the error
				winston.error(err.stack);

				//Sen the error
				callback(err);

			} else {

				winston.info('Avatar gotten successfully for user ' + username);

				//Push a new member
				team.push({
					username: member.username,
					profile: member.profile,
					avatar: avatar
				});

				//Next
				callback();

			}

		});

	}, function(err){

		//Check errors
		if(err){

			//Track the error
			winston.error(err.stack, req.headers);

			//Show flash
			req.flash('error', 'There was an error getting the about page, please try in some minutes');

			//Redirect to the home
			res.redirect('/');

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
