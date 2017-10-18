module.exports = function(grunt) {
    
    grunt.initConfig({
        jshint: {
            all: ['*.js', 'modules/*.js']
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    
    grunt.registerTask('default', ['jshint']);
    
};