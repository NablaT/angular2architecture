import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import {
    DEV_PATH,
    PROD_PATH,
    SASS_FILES
} from '../gulp.conf';
import { getBrowserSync } from '../browsersync';

const plugins = gulpLoadPlugins();

let bs = getBrowserSync();

/**
 * This function compiles SASS_FILES files into the destinationDirectory directory.
 *
 * @param {String} destinationDirectory - The destination directory.
 * @param {boolean} wantSourceMap - A boolean to define if we want source map in the destinationDirectory directory or not.
 */
function sassFn (destinationDirectory, wantSourceMap = false) {
    return gulp.src(SASS_FILES, {base: 'src'})
               .pipe(plugins.if(wantSourceMap, plugins.sourcemaps.init()))
               .pipe(plugins.sass({includePaths: [destinationDirectory]}))
               .pipe(plugins.if(wantSourceMap, plugins.sourcemaps.write('./')))
               .pipe(gulp.dest(destinationDirectory))
               .pipe(bs.stream());
}

///////////////////// Sass Tasks /////////////////////

gulp.task('sass:dev', () => {
    return sassFn(DEV_PATH, true);
});

gulp.task('sass:prod', () => {
    return sassFn(PROD_PATH);
});