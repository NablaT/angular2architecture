import gulp from 'gulp';
import {sass} from '../utils/sass';
import {TMP_DIR} from '../gulp.conf';

gulp.task('build:sass:prod', () => {
    return sass(TMP_DIR);
});