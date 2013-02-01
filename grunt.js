/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      files: ['_site/**/*.html'],
      tasks: 'htmllint'
    },
    htmllint: {
        files: '_site/**/*.html'
    }
  });

  grunt.loadNpmTasks('grunt-html');
  grunt.registerTask('default', 'htmllint');

};
