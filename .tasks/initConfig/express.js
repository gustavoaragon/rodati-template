/* eslint camelcase:0 */

'use strict';

module.exports = function() {

	return {
		options: {
			port: false,
			script: 'server.js'
		},
		init: {
			options: {
				background: false
			}
		},
		test: {
			options: {
				node_env: 'testing'
			}
		}
	};

};
