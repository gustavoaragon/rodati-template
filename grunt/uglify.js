module.exports = function (grunt, options) {

    return {

        'rodati': {

            files: grunt.file.expandMapping(
                ['public/js/*.js', '!public/js/*.min.js', 'public/js/vendor/*.js', '!public/js/vendor/*.min.js'], '.', {
                rename: function(destBase, destPath) {
                    return destPath.replace('.js', '.min.js');
                }
            })

        }

    };

};