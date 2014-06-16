/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */

//Main dependencies
var nconf       = require('nconf');
var config      = nconf.get();

exports.config = config.app.newrelic.config;