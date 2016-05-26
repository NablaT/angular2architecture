import gulp from 'gulp';
import path from 'path';
import {
    SRC_DIR,
    INDEX,
    DEV_DIR
} from '../../gulp.conf';
import {inject} from '../../utils/inject';
import {getBrowserSync} from '../../utils/browsersync';

let bs = getBrowserSync();

gulp.task('build:index:dev', function () {
    return gulp.src(path.join(SRC_DIR, INDEX))
               .pipe(inject(DEV_DIR, 'shims'))
               .pipe(inject(DEV_DIR, 'libs'))
               .pipe(inject(DEV_DIR, 'project'))
               .pipe(gulp.dest(DEV_DIR))
               .pipe(bs.stream());
});