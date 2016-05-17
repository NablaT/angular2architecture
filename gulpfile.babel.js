import gulp from 'gulp';
import HubRegistry from 'gulp-hub';

const hub = new HubRegistry(['gulp/tasks/*.js']);

gulp.task('build:dev', gulp.series('clean:dev', gulp.parallel('copy:dev', 'ts:dev', 'sass:dev'), 'inject:dev', 'server:dev', function (done) {
    done();
}));

gulp.task('build:prod', gulp.series('clean:prod', gulp.parallel('copy:prod', 'ts:prod', 'sass:prod'), 'inject:prod', 'useref:prod', function (done) {
    done();
}));

gulp.task('serve', gulp.series('build:dev', 'watch', function (done) {
    done();
}));

gulp.task('serve:prod', gulp.series('build:prod', 'server:prod', function (done) {
    done();
}));