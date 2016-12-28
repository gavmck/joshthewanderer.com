import gulp from 'gulp';
import rev from 'gulp-rev-all';
import cleanup from 'gulp-rev-delete-original';
import config from '../config';

gulp.task('revision', () => {
  return gulp.src(`${config.paths.dist}/**`)
             .pipe(rev.revision(config.revision))
             .pipe(cleanup())
             .pipe(gulp.dest(config.paths.dist));
});
