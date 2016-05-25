import gulp from 'gulp';
import {sass} from '../../utils/sass';
import {DEV_DIR} from '../../gulp.conf';

gulp.task('build:sass:dev', () => {
    return sass(DEV_DIR);
});