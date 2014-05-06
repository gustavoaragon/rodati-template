module.exports = {

    options: {
        livereload: true,
        nospawn: true
    },

    html: {
        files: 'server/views/**/*.dust'
    },

    config: {
        files: 'server/config/*.json'
    },

	server: {
		files: ['.rebooted']
	}

};