/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    validation: {
        files: "_site/**/!(google*).html"
    },
    watch: {
        files: "<config:htmllint.files>",
        tasks: 'validate'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.registerTask('default', 'validation');

};
