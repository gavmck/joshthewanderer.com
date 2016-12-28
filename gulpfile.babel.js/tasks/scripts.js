import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import stream from 'event-stream';
import config from '../config';

function bundle(debug = false) {
  const tasks = config.scripts.files.map((entry) => {
    return browserify(`${config.scripts.src}${entry}`).transform(babelify, config.scripts.babelify)
                            .bundle()
                            .pipe(source(entry))
                            .pipe(buffer())
                            .pipe(sourcemaps.init({ loadMaps: debug }))
                            .pipe(uglify())
                            .pipe(sourcemaps.write('.'))
                            .pipe(gulp.dest(config.scripts.dist));
  });

  return stream.merge.apply(null, tasks);
}

gulp.task('scripts:dev', () => {
  return bundle(true);
});

gulp.task('scripts:prod', () => {
  return bundle();
});
