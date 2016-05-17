import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import {
    DEV_PATH,
    PROD_PATH,
    INDEX,
    SHIMS_DEPENDENCIES,
    LIBS_DEPENDENCIES,
    SHIMS,
    LIBS
} from '../gulp.conf';
import { getBrowserSync } from '../browsersync';

const plugins = gulpLoadPlugins();

let bs = getBrowserSync();

/**
 * This function injects :
 * <ul>
 *     <li>shims</li>
 *     <li>libs</li>
 * </ul>
 * in the INDEX file.
 *
 * @param {String} destinationDirectory - The destination directory.
 */
function inject (destinationDirectory) {
    return gulp.src(INDEX, {cwd: destinationDirectory})
               .pipe(plugins.inject(gulp.src(SHIMS_DEPENDENCIES, {read: false}), {name: SHIMS}))
               .pipe(plugins.inject(gulp.src(LIBS_DEPENDENCIES, {read: false}), {name: LIBS}))
               .pipe(gulp.dest(destinationDirectory))
               .pipe(bs.stream());
}

///////////////////// Inject Tasks /////////////////////

gulp.task('inject:dev', () => {
    return inject(DEV_PATH);
});

gulp.task('inject:prod', () => {
    return inject(PROD_PATH);
});