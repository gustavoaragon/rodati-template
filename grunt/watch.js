module.exports = {

	options: {
		livereload: true,
		nospawn: true
	},

	html: {
		files: 'server/views/**/*.dust'
	},

	stylesheets: {
		files: 'public/sass/**/*.scss',
		tasks: ['sass']
	},

	scripts: {
		files: 'public/js/**/*.js',
		tasks: ['browserify']
	},

	config: {
		files: 'server/config/*.json'
	},

	server: {
		files: ['.rebooted']
	}
};