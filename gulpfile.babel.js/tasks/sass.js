import gulp from 'gulp';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import autoprefixer from 'gulp-autoprefixer';
import config from '../config';

gulp.task('sass', () => {
  return gulp.src(config.styles.src)
             .pipe(sassGlob())
             .pipe(sass(config.styles.sass))
             .pipe(autoprefixer(config.styles.autoprefixer))
             .pipe(gulp.dest(config.styles.dist));
});
