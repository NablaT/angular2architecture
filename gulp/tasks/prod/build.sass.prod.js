import gulp from 'gulp';
import {sass} from '../../utils/sass';
import {TMP_DIR} from '../../gulp.conf';

gulp.task('build:sass:prod', () => {
    let enableProdMode = true;
    return sass(TMP_DIR, enableProdMode);
});