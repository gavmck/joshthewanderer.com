import gulp from 'gulp';
import sequence from 'run-sequence';
import './tasks/copy';
import './tasks/sass';
import './tasks/serve';
import './tasks/watch';
import './tasks/scripts';
import './tasks/revision';
import './tasks/cleanup';

gulp.task('default', (callback) => {
  sequence('cleanup', ['watch', 'serve'], callback);
});

gulp.task('build', (callback) => {
  sequence('cleanup', [
    'copy', 'sass', 'scripts:prod',
  ], 'revision', callback);
});
