import gulp from 'gulp';
import path from 'path';
import {
    SRC_DIR,
    INDEX,
    PROD_DIR
} from '../../gulp.conf';
import {inject} from '../../utils/inject';

gulp.task('build:index:prod', function () {
    return gulp.src(path.join(SRC_DIR, INDEX))
               .pipe(inject(PROD_DIR))
               .pipe(gulp.dest(PROD_DIR));
});