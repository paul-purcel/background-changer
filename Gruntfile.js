module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify:{
			options:{
				mangle:false
			},
			distribution:{
				files:{
					'dist/jquery.background-changer.min.js':[
						'src/jquery.background-changer.js'
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);
}