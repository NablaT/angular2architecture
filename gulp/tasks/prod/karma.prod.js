import gulp from 'gulp';
import {karma} from '../../utils/karma';
import {TMP_DIR} from '../../gulp.conf';

gulp.task('karma:prod', function (done) {
    karma(TMP_DIR, true, done);
});