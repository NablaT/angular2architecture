import gulp from 'gulp';
import {DEV_DIR} from '../../gulp.conf';
import {init} from '../../utils/browsersync';

gulp.task('server:dev', (done) => {
    init(DEV_DIR);
    done();
});