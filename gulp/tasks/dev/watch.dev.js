import gulp from 'gulp';
import path from 'path';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import {SRC_DIR} from '../../gulp.conf';

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
 * This function watches sass files.
 */
function sassWatch () {
    let sass  = [];
    let tasks = ['sass:dev'];
    watch(sass, tasks);
}

/**
 * This function watches only the INDEX file because we need to inject dependencies after copying.
 */
function indexWatch () {
    gulp.watch('src/', function (event) {
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

    let files = [].concat(EXCLUDED_FILES);
    let tasks = ['copy:dev'];
    watch(files, tasks);
}

///////////////////// Watch Tasks /////////////////////

gulp.task('watch:scripts', function () {
    console.log('cc');
    gulp.watch(path.join(SRC_DIR, '**', '*.ts'), gulp.series('template:ts:dev', 'build:ts:dev'))
        .on('change', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});

gulp.task('watch:sass', sassWatch);
gulp.task('watch:index', indexWatch);
gulp.task('watch:others', othersWatch);
gulp.task('watch', callback =>
    gulp.parallel('watch:scripts', function (done) {
        done();
    })
);