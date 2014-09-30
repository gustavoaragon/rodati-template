'use strict';

/**
 * Loops over an object
 * @see  https://github.com/akdubya/dustjs/issues/9
 * @param  {object} dust   Dust intance of the app
 * @return {string}        Chunk object with the key, value, index, lenght and lastIndex of the object
 */
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
