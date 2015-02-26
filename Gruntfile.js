module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
    		js: {
    			files: ['/app/features/**/*.js','/app/shared/**/*.js'],
    			tasks: ['jshint']
    		},
    		livereload: {
    			options: {
    				livereload: '<%= connect.options.livereload %>'
    			},
    			files: [
    				'app/**/*'
    			]
			},
			css: {
				files: 'app/assets/styles/*.scss',
				tasks: ['compass']
			}
  		},

        jshint: {
            dev: {        
                src: ['/app/features/**/*.js','/app/shared/**/*.js']
            }
        },
        connect: {
        	options: {
        		port: 9000,
	        	// Change this to '0.0.0.0' to access the server from outside.
	        	hostname: 'localhost',
	        	livereload: 35729
	   		 },
		    livereload: {
		    	options: {
		    		open: true,
		    		base : 'app'
		    	}
		    }
        },
        compass: {                 
		    dev: {                    
		    	options: {
		    		sassDir: 'app/assets/styles',
		    		cssDir: 'app/assets/styles',
		    		require: 'bootstrap-sass'
		    	}
		    }
		},
	    wiredep: {
	    	app: {
	    		src: ['app/index.html'],
	    		ignorePath:  /\.\.\//
	    	},
		},
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-wiredep');

    grunt.registerTask('go', [
      'compass',
      'wiredep',
      'connect:livereload',
      'watch'
    ]);


    grunt.registerTask('default', []);
};