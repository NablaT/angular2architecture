import gulp from 'gulp';
import {
    DEV_PATH,
    PROD_PATH
} from '../gulp.conf';
import historyApiFallback from 'connect-history-api-fallback';
import { getBrowserSync } from '../browsersync';

let bs = getBrowserSync();

/**
 * This function initiates the server.
 *
 * @param {String} destinationDirectory - The destination directory.
 */
function init (destinationDirectory) {
    bs.init({
        server: {
            baseDir: destinationDirectory + '/',
            routes : {
                "/node_modules": "node_modules"
            }
        },
        injectChanges: true,
        middleware: [historyApiFallback()]
    });
}

///////////////////// Copy Tasks /////////////////////

gulp.task('server:dev', () => {
    init(DEV_PATH);
});

gulp.task('server:prod', () => {
    init(PROD_PATH);
});