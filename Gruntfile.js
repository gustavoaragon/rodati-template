'use strict';

/**
 * Global modules
 */
var gruntHorde = require('grunt-horde');
var fs = require('fs');
var async = require('async');

/**
 * Private variables
 */
var _defaultGrunt = './.tasks';
var _appGrunt = './tasks';

/**
 * Init grunt-horde charging all the task and configurations
 * @param  {object} grunt Grunt instance
 */
 function init(grunt){

	//Create a new instance of Grunt Horde
	var horde = gruntHorde.create(grunt);

	//Run steps in serie
	async.series([

		//Check if exists the default path and apply 
		function(callback){
			if (fs.existsSync(_defaultGrunt)) {
				horde.loot(_defaultGrunt);
			}
			callback();
		},

		//Check if exists the app path
		function(callback){
			if (fs.existsSync(_appGrunt)) {
				horde.loot(_appGrunt);
			}
			callback();
		}

	], function(err){

		//If there are an error
		if(err){

			throw err;

		//Init horde
		} else {

			horde.attack();

		}

	});

}

/**
 * Exports
 */
module.exports = init;
