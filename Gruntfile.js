module.exports = function (grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'assets/styles/styles.css': 'rocket-engine/styles/styles.scss'
                }
            }
        }
    });

    grunt.registerTask('default', ['sass']);

};