import gulp from 'gulp';
import path from 'path';
import {
    SRC_DIR,
    INDEX,
    DEV_DIR
} from '../../gulp.conf';
import {inject} from '../../utils/inject';

gulp.task('build:index:dev', function () {
    return gulp.src(path.join(SRC_DIR, INDEX))
               .pipe(inject('shims', DEV_DIR))
               .pipe(inject('libs', DEV_DIR))
               .pipe(inject('css', DEV_DIR))
               .pipe(gulp.dest(DEV_DIR))
});