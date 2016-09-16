/* hepl-mmi/meet-canvas
 *
 * /Gruntfile.js - Grunt configuration file
 *
 * coded by leny@flatLand!
 * started at 12/03/2016
 */

"use strict";

module.exports = function( grunt ) {

    // 1. load tasks
    grunt.loadNpmTasks( "grunt-babel" );
    grunt.loadNpmTasks( "grunt-contrib-watch" );
    grunt.loadNpmTasks( "grunt-cowsay" );
    grunt.loadNpmTasks( "grunt-eslint" );


    // 2. configure tasks
    grunt.initConfig( {
        // babel
        "babel": {
            "scripts": {
                "files": {
                    "_shared/utils.js": "_shared/utils.es2015.js",
                    "_shared/canvapp.js": "_shared/canvapp.es2015.js",
                    "exo-one/script.js": "exo-one/script.es2015.js",
                    "exo-two/script.js": "exo-two/script.es2015.js",
                    "exo-three/script.js": "exo-three/script.es2015.js",
                    "exo-four/script.js": "exo-four/script.es2015.js",
                    "exo-five/script.js": "exo-five/script.es2015.js",
                    "exo-six/script.js": "exo-six/script.es2015.js",
                    "exo-seven/script.js": "exo-seven/script.es2015.js"
                }
            }
        },
        // cowsay
        "cowsay": {
            "done": {
                "options": {
                    "message": "I'm done!"
                }
            }
        },
        // eslint
        "eslint": {
            "options": {
                "configFile": ".eslintrc.json"
            },
            "scripts": [ "exo-**/*.es2015.js", "_shared/*.es2015.js" ]
        },
        // watch
        "watch": {
            "options": {
                "spawn": false
            },
            "scripts": {
                "files": [ "exo-**/*.es2015.js", "_shared/*.es2015.js" ],
                "tasks": [ "eslint", "compile" ]
            }
        }
    } );

    // 3. aliases
    grunt.registerTask( "default", [
        "compile",
        "analyse",
        "cowsay:done"
    ] );

    grunt.registerTask( "compile", [ "babel:scripts" ] );
    grunt.registerTask( "analyse", [ "eslint:scripts" ] );

    grunt.registerTask( "work", [
        "compile",
        "analyse",
        "watch"
    ] );
};
