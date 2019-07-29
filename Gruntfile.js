module.exports = function(grunt){
  grunt.initConfig({
    svgfit: {
      files: 
        {
          src: ['svg/**/*.svg'], 
          dest: 'output/'
        }
      
    },
  });
  
  grunt.loadNpmTasks('grunt-svgfit');
  grunt.registerTask('default', ['svgfit']);
};
