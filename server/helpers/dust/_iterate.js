'use strict';

// Loops over supplied object.
// Based on: https://github.com/akdubya/dustjs/issues/9
module.exports = function(dust) {

	dust.helpers.iterate = function(chunk, context, bodies, params) {

		var obj = params['for'];

		for (var k in obj) {

			chunk = chunk.render(bodies.block, context.push({
				key: k, 
				value: obj[k],
				index: Object.keys(obj).indexOf(k),
				length: Object.keys(obj).length,
				lastIndex: Object.keys(obj).length - 1
			}));

		}

		return chunk;

	};

};
