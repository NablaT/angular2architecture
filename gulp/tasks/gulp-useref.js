import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import {
    PROD_PATH,
    INDEX
} from '../gulp.conf';

const plugins = gulpLoadPlugins();

/**
 * This function aggregates scripts in file.
 *
 * @param {String} destinationDirectory - The destination directory.
 * @param {String} destinationFile - The file in which we want to use the plugin.
 */
function useref (destinationDirectory, destinationFile) {
    return gulp.src(destinationDirectory + '/' + destinationFile)
               .pipe(plugins.useref())
               .pipe(gulp.dest(destinationDirectory));
}

///////////////////// Useref Tasks /////////////////////

gulp.task('useref:prod', () => {
    return useref(PROD_PATH, INDEX);
});