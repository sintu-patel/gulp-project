module.exports = function(grunt) {
  grunt.initConfig({
    assemble: {
      options: {
        partials: ['dev/partials/*.hbs'],
        layout: ['dev/pages/index1.hbs'],
        data: ['./app/data/*.json']
        //helpers: ['./build-pipeline/_helpers/helper-*.js']
      },
      site: {
        files: [
          {
            expand: true,
            cwd: "dev",
            src: "dev/partials/*.hbs",
            dest: "dev",
            ext: ".html"
          }
        ]
      }
    }
  });
  grunt.loadNpmTasks("assemble");
  return grunt.registerTask('grunt-assemble', ['assemble']);
};