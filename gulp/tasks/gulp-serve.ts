import * as gulp from 'gulp';
import {getBrowserSync} from '../browsersync';

let bs = getBrowserSync();

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