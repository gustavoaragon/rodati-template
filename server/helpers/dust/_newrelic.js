'use strict';

// New relic Browser Monitoring
module.exports = function(dust) {

	dust.helpers.newrelic = function(chunk, context) {

		var browserTimingHeader = '';

		if (context.stack.head.newrelic) {
			browserTimingHeader = context.stack.head.newrelic.getBrowserTimingHeader();
		}

		return chunk.write(browserTimingHeader);

	};

};
