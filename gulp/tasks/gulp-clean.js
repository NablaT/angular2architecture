import gulp from 'gulp';
import del from 'del';
import { DEV_PATH } from '../gulp.conf';

/**
 * This function cleans files in dist directory.
 */
export function clean (done) {
    del([DEV_PATH + '/**/*'], done);
}

///////////////////// Clean Tasks /////////////////////

gulp.task(clean);