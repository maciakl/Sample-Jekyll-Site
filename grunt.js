/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    htmllint: {
        files: '_site/**/*.html'
    },
    watch: {
      files: '<config:htmllint.files>',
      tasks: 'htmllint'
    }
  });

  grunt.loadNpmTasks('grunt-html');
  grunt.registerTask('default', 'htmllint');

};
