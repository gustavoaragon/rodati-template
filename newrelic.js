/* eslint camelcase:0 */

'use strict';

/**
 * Global modules
 */
var nconf = require('nconf');

/**
 * Private variables
 */
var _config = nconf.get();

/**
 * Set the configuration of New Relic
 * @return {object} JSON with the configuration of new relic
 */
function config(){

	//Enabled/disabled the agent
	_config.app.newrelic.config.agent_enabled = _config.app.newrelic.enabled;

	return _config.app.newrelic.config;

}

/**
 * Exports New Relic agent configuration
 */
exports.config = config();
