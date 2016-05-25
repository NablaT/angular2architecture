import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import {getBrowserSync} from '../browsersync';

const plugins = gulpLoadPlugins();

let _tsProject = plugins.typescript.createProject('tsconfig.json', {
    typescript: require('typescript')
});

let bs = getBrowserSync();

let typings = ['typings/browser.d.ts'];

/**
 * This function transpiles typescript files.
 *
 * @param {Array} filesArray - The files to be transpiled.
 * @param {String} destinationDirectory - The destination directory.
 * @param {boolean} enableProdMode - A boolean to define if we are in production or not.
 */
export function typescript (filesArray, destinationDirectory, enableProdMode = false) {
    return gulp.src(typings.concat(filesArray))
               .pipe(plugins.if(!enableProdMode, plugins.sourcemaps.init()))
               .pipe(plugins.typescript(_tsProject))
               .pipe(plugins.if(!enableProdMode, plugins.sourcemaps.write('./')))
               .pipe(gulp.dest(destinationDirectory))
               .pipe(bs.stream({match: "**/*.js"}));
}