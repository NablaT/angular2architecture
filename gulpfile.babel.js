import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import HubRegistry from 'gulp-hub';
import cp from 'child_process';

const hub = new HubRegistry(['gulp/tasks/**/*.js']);

const plugins = gulpLoadPlugins();

gulp.task('karma:tdd:dev', function (done) {
    return cp.execFile('gulp karma:dev');
});

gulp.task('build:dev',
          gulp.series('clean:dev',
                      gulp.parallel('build:assets:dev',
                                    'build:html:dev',
                                    'build:sass:dev',
                                    gulp.series('template:ts:dev', 'build:ts:dev'),
                                    'copy:systemjs:dev'),
                      'build:index:dev',
                      gulp.parallel('server:dev', 'karma:tdd:dev'),
                      function (done) {
                          done();
                      }
          )
);

gulp.task('serve', gulp.series('build:dev', 'watch', function (done) {
    done();
}));

gulp.task('build:prod',
          gulp.series('clean:prod',
                      gulp.parallel('copy:prod', 'ts:prod', 'sass:prod'),
                      'inject:prod',
                      'useref:prod',
                      function (done) {
                          done();
                      }));

gulp.task('serve:prod', gulp.series('build:prod', 'server:prod', function (done) {
    done();
}));