import gulp from 'gulp';
import path from 'path';
import Builder from 'systemjs-builder';
import {
    SRC_DIR,
    PROD_DIR,
    TMP_DIR
} from '../../gulp.conf';

const BUNDLER_OPTIONS = {
    format: 'cjs',
    minify: true,
    mangle: false
};

gulp.task('bundles.app.prod', (done) => {
    let builder = new Builder('./', path.join(SRC_DIR, 'systemjs.config.js'));

    builder.buildStatic(path.join(TMP_DIR, 'app', 'main.js'), path.join(PROD_DIR, 'js', 'app.js'), BUNDLER_OPTIONS)
           .then(() => done());
});