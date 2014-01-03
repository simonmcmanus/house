module.exports = function(grunt) {
  grunt.initConfig({
    browserify2: {
      dev: {
        entry: './public/js/app.js',
        mount: './public/js/bundle.js',
        server: './public/js/bundle.js',
        debug: true
      },
      compile: {
        entry: './public/js/app.js',
        compile: './public/js/bundle.js'
      }
    },
    watch: {
      scripts: {
        files: '**/*.js',
        tasks: ['browserify2:compile'],
        options: {
          interrupt: true,
        },
      },
    }
  });
  grunt.loadNpmTasks('grunt-browserify2');
  grunt.loadNpmTasks('grunt-contrib-watch');
//  grunt.registerTask('default', 'browserify2:dev');
  grunt.registerTask('default', 'browserify2:compile');
  grunt.registerTask('compile', 'browserify2:compile');

};
