'use strict';

/**
 * Set the New Relic Browser Monitoring if is enabled
 * @param  {object} dust   Dust intance of the app
 * @return {string}        Return all the code of Browser Timing Header of New Relic
 */
module.exports = function(dust) {

	dust.helpers.newrelic = function(chunk, context) {

		var browserTimingHeader = '';

		if (context.stack.head.newrelic) {
			browserTimingHeader = context.stack.head.newrelic.getBrowserTimingHeader();
		}

		return chunk.write(browserTimingHeader);

	};

};
