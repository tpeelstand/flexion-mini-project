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
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/styles.css": "less/styles.less", // destination file and source file
        }
      }
    },
    sass: {
      development: {
        options: {
          compress: false,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/sstyles.css": "sa ss/sstyles.sass", // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['stylus/**/*.styl', 'less/**/*.less', 'sass/**/*.sass'], // which files to watch
        tasks: ['stylus', 'less', 'sass'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['stylus', 'less', 'sass', 'watch']);
    
    grunt.loadNpmTasks('grunt-contrib-sass');
};

