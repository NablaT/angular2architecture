import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import { getBrowserSync } from '../utils/browsersync';
import {
    DEV_PATH,
    PROD_PATH,
    ALL_FILES,
    TYPESCRIPT_FILES,
    SASS_FILES,
    INDEX
} from '../gulp.conf';

const plugins = gulpLoadPlugins();

let bs = getBrowserSync();

/**
 * @constant The array of excludes files.
 */
const EXCLUDED_FILES = [
    '!' + TYPESCRIPT_FILES,
    '!' + SASS_FILES
];

/**
 * This function copies ALL_FILES excepts:
 * <ul>
 *   <li>Typescript files</li>
 *   <li>Sass files</li>
 * </ul>
 * into the destinationDirectory directory.
 *
 * @param {String} files - Files to copy.
 * @param {String} destinationDirectory - The destination directory.
 */
function copyDist (files, destinationDirectory) {

    const FILES = [files].concat(EXCLUDED_FILES);

    return gulp.src(FILES, {base: 'src'})
               .pipe(plugins.changed(destinationDirectory))
               .pipe(gulp.dest(destinationDirectory))
               .pipe(plugins.if(files !== ('src/' + INDEX), bs.stream()));
}

///////////////////// Copy Tasks /////////////////////

gulp.task('copy:dev', () => {
    return copyDist(ALL_FILES, DEV_PATH);
});

gulp.task('copy:prod', () => {
    return copyDist(ALL_FILES, PROD_PATH);
});

gulp.task('copy:index', () => {
    return copyDist('src/' + INDEX, DEV_PATH);
});