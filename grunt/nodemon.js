module.exports = {

	'rodati': {

		script: 'server.js',

		options: {

			ignore: [
				'node_modules/**',
				'public/**/*.js',
				'grunt/**',
			],

			ext: 'js,json',

			env: {
				NODE_ENV: 'development'
			},

			callback: function (nodemon) {

				nodemon.on('log', function (event) {
					console.log(event.colour);
				});

				nodemon.on('restart', function () {
					setTimeout(function() {
						require('fs').writeFileSync('.rebooted', 'rebooted');
					}, 1000);
				});

			}

		}

	}

};