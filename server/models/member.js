/* globals utils */

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

			//Pass the error
			callback(err);

		} else {

			//Try to parse the body response
			var data = utils.tryJSON.parse(body);

			//Check if the body is a valid JSON
			if(data){

				//Check if the response has the avatar prop
				if(data.hasOwnProperty('avatar_url')){

					//Pass the avatar in the callback
					callback(null, data.avatar_url);

				} else {

					//Pass an error
					callback(new Error('The response doen\'t have the property \'avatar_url\''));				

				}

			} else {

				//Pass an error
				callback(new Error('The response is not a valid JSON object'));

			}

		}

	});

};

/**
 * Public methods exported
 */
module.exports = {
	instance: Instance
};

