'use strict';

/**
 * Global modules
 */
var request = require('request');
var winston = require('winston');

/**
 * Instance constructor
 */
function Instance(username){

	//Props
	this.username = username;
	this.profile = 'https://github.com/' + this.username;

}

/**
 * Get the GitHub avatar URL from a member
 * @return {string} The URL of the avatar
 */
Instance.prototype.getAvatarUrl = function(callback) {

	//Username
	var username = this.username;

	winston.info('Getting avatar for user ' + username);

	//Get the github avatar for a member
	//Note: the user-agent is required by the GitHub API
	request({
		url: 'https://api.github.com/users/' + username,
		headers: {
			'User-Agent': 'request'
		}
	}, function (err, response, body) {

		//Check errors
		if (err) {

			//Log the error
			winston.error('There was an error getting the user avatar: ' + err);

			//Pass an error string
			callback('ERROR');

		} else {

			winston.info('Avatar gotten successfully for user ' + username);

			//Try to parse the body response
			var data = JSON.parse(body);

			//Check if the response has the avatar prop
			if(data.hasOwnProperty('avatar_url') === false){

				//Log an error
				winston.warn('The response doen\'t have the property \'avatar_url\'');

			}

			//Pass the avatar in the callback
			callback(data.avatar_url);

		}

	});

};

/**
 * Public methods exported
 */
module.exports = {
	instance: Instance
};

