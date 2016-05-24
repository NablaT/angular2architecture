import gulp from 'gulp';
import path from 'path';
import {
    TMP_DIR,
    APP_SRC
} from '../../gulp.conf';

gulp.task('build:html:prod', () => {
    return gulp.src(path.join(APP_SRC, '**', '*.html'))
               .pipe(gulp.dest(path.join(TMP_DIR, 'app')));
});
