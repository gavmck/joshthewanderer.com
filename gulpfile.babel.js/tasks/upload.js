import gulp from 'gulp';
import rsync from 'gulp-rsync';
import config from '../config';

gulp.task('upload', () => {
  Object.assign(config.deploy.rsync, config.deploy.location);

  return gulp.src(config.deploy.paths)
             .pipe(rsync(config.deploy.rsync));
});
