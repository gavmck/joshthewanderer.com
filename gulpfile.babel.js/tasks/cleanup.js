import gulp from 'gulp';
import clean from 'gulp-clean';
import config from '../config';

gulp.task('cleanup', () => {
  return gulp.src(`${config.paths.dist}/**/*`, config.clean)
             .pipe(clean());
});
