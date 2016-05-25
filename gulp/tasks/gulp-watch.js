import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import {
    INDEX,
    ALL_FILES,
    TYPESCRIPT_FILES,
    SASS_FILES
} from '../gulp.conf';

const plugins = gulpLoadPlugins();

let bs = browserSync.get('Server');

/**
 * This function watches the files in the filesArray and executes the tasks in the tasksArray.
 *
 * @param {Array} filesArray - The files to watch.
 * @param {Array} tasksArray - The tasks to execute.
 */
function watch (filesArray, tasksArray) {
    gulp.watch(filesArray, tasksArray)
        .on('change', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
}

/**
 * This function watches typescript files.
 */
function scriptsWatch () {
    let scripts = [TYPESCRIPT_FILES];
    let tasks   = ['ts:dev'];
    watch(scripts, tasks);
}

/**
 * This function watches sass files.
 */
function sassWatch () {
    let sass  = [SASS_FILES];
    let tasks = ['sass:dev'];
    watch(sass, tasks);
}

/**
 * This function watches only the INDEX file because we need to inject dependencies after copying.
 */
function indexWatch () {
    gulp.watch('src/' + INDEX, function (event) {
        console.log('File ' + event.path + ' was ' + event.type);
        gulp.series('copy:index', 'inject:dev', function (done) {
            done();
        });
    });
}

/**
 * This function watches all files except
 * <ul>
 *     <li>TYPESCRIPT_FILES</li>
 *     <li>SASS_FILES</li>
 *     <li>INDEX</li>
 * </ul>
 */
function othersWatch () {
    const EXCLUDED_FILES = [
        '!' + TYPESCRIPT_FILES,
        '!' + SASS_FILES,
        '!src/' + INDEX
    ];

    let files = [ALL_FILES].concat(EXCLUDED_FILES);
    let tasks = ['copy:dev'];
    watch(files, tasks);
}

///////////////////// Watch Tasks /////////////////////
