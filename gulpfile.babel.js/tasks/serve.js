import gulp from 'gulp';
import server from 'browser-sync';
import config from '../config';

server.create();

gulp.task('serve', () => {
  return server.init(config.browsersync);
});
