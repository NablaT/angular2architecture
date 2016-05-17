import gulp from 'gulp';
import HubRegistry from 'gulp-hub';

const hub = new HubRegistry(['gulp/tasks/*.js']);

gulp.task('serve', callback => {
    gulp.series('build:dev', 'watch', callback);
});

gulp.task('serve:prod', callback => {
    gulp.series('build:prod', 'server:prod', callback)
});

gulp.task('build:dev', callback => {
    gulp.series('clean:dev', gulp.parallel('copy:dev', 'ts:dev', 'sass:dev'), 'inject:dev', 'server:dev', callback)
});

gulp.task('build:prod', callback =>
    gulp.series('clean:prod', gulp.parallel('copy:prod', 'ts:prod', 'sass:prod'), 'inject:prod', 'useref:prod', callback)
);