import * as gulp from 'gulp';
import * as merge from 'merge-stream';

let vendorJS = [
    'es6-shim/es6-shim.min.js',
    'systemjs/dist/system-polyfills.js',
    'angular2/es6/dev/src/testing/shims_for_IE.js',
    'angular2/bundles/angular2-polyfills.js',
    'systemjs/dist/system.src.js',
    'rxjs/bundles/Rx.js',
    'angular2/bundles/angular2.dev.js'
];

/**
 * This function copies files into the dist directory.
 */
function copyDist() {

    let vendor = gulp.src(vendorJS, {cwd: 'node_modules', base: 'node_modules'})
        .pipe(gulp.dest('dist/vendor/'));

    let others = gulp.src(['**/*', '!**/*.ts'], {cwd: 'src'})
        .pipe(gulp.dest('dist/'));

    return merge(vendor, others);
}

///////////////////// Copy Tasks /////////////////////

gulp.task('copy:dist', copyDist);