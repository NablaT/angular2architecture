import * as gulp from 'gulp';
import * as browserSync from 'browser-sync';

// We can reuse this server in other files.
let bs = browserSync.create('Server');

/**
 * This function initiates the server.
 */
function init(){
    bs.init({
        server : {
            baseDir : './dist'
        }
    });
}

///////////////////// Copy Tasks /////////////////////

gulp.task('server:init', init);