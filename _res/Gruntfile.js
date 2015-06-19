module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: [
          // bower components
          'bower_components/jquery/dist/jquery.js',
          'bower_components/modernizr/modernizr.js',
          'bower_components/scrollReveal.js/dist/scrollReveal.js',
        ],
        dest: 'js/app.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};