import gulp from 'gulp';
import HubRegistry from 'gulp-hub';

const hub = new HubRegistry(['gulp/tasks/*.js']);

gulp.task('serve', callback =>
    runSequence('build', 'watch', callback)
);

gulp.task('build', callback =>
    runSequence('clean', ['copy:dist', 'ts:dist', 'sass:dist'], 'inject', 'server:init', callback)
);

var build = gulp.series('clean');
export {build};

export default build;