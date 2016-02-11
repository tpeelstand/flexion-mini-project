module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    stylus: {
      development: {
        options: {
          compress: false,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/main.css": "stylus/main.styl", // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['stylus/**/*.styl'], // which files to watch
        tasks: ['stylus'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['stylus', 'watch']);
};

