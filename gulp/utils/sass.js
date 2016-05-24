import gulp from 'gulp';
import path from 'path';
import gulpLoadPlugins from 'gulp-load-plugins';
import {getBrowserSync} from '../browsersync';
import {SRC_DIR} from '../gulp.conf';

const plugins = gulpLoadPlugins();

let bs = getBrowserSync();

/**
 * This function compiles sass files into the destinationDirectory directory.
 *
 * @param {String} destinationDirectory - The destination directory.
 * @param {boolean} wantSourceMap - A boolean to define if we want source map in the destinationDirectory directory or
 *     not.
 */
export function sass (destinationDirectory, wantSourceMap = false) {
    return gulp.src(path.join(SRC_DIR, '**', '*.scss'))
               .pipe(plugins.if(wantSourceMap, plugins.sourcemaps.init()))
               .pipe(plugins.sass())
               .pipe(plugins.if(wantSourceMap, plugins.sourcemaps.write('./')))
               .pipe(gulp.dest(destinationDirectory))
               .pipe(bs.stream());
}