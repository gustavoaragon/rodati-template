'use strict';

/**
 * Global modules
 */
var nconf = require('nconf');

/**
 * Private variables
 */
var _config      = nconf.get();

/**
 * Exports New Relic agent configuration
 */
exports.config = _config.app.newrelic.config;
