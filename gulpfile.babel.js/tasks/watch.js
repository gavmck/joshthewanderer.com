import gulp from 'gulp';
import config from '../config';

gulp.task('watch', ['copy', 'sass', 'scripts:dev'], () => {
  gulp.watch([config.html.src], ['copy']);
  gulp.watch([config.styles.src], ['sass']);
  gulp.watch([config.scripts.src], ['scripts:dev']);
});
