import gulp from 'gulp';
import config from '../config';

gulp.task('copy', () => {
  return gulp.src(config.html.src)
             .pipe(gulp.dest(config.html.dist));
});
