import gulp from 'gulp';
import del from 'del';
import {
    DEV_PATH,
    PROD_PATH
} from '../gulp.conf';

/**
 * This function deletes:
 * <ul>
 *   <li>Everything in the directory</li>
 *   <li>The directory itself</li>
 * </ul>
 *
 * @param {String} directory - The directory to delete.
 * @param {Function} callback - Callback function.
 */
function clean (directory, callback) {
    return del(['{' + directory + ',' + directory + '/**/*}'], callback);
}

///////////////////// Clean Tasks /////////////////////

gulp.task('clean:dev', (done) => {
    return clean(DEV_PATH, done);
});

gulp.task('clean:prod', (done) => {
    return clean(PROD_PATH, done);
});

gulp.task('clean:all', gulp.series('clean:dev', 'clean:prod', function (done) {
    done();
}));