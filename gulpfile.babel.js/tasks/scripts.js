import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import config from '../config';

function bundle(debug = false) {
  const bundler = browserify(config.scripts.src).transform(babelify, config.scripts.babelify);

  return bundler.bundle()
                .pipe(source('main.js'))
                .pipe(buffer())
                .pipe(sourcemaps.init({ loadMaps: debug }))
                .pipe(uglify())
                .pipe(sourcemaps.write('.'))
                .pipe(gulp.dest(config.scripts.dist));
}

gulp.task('scripts:dev', () => {
  return bundle(true);
});

gulp.task('scripts:prod', () => {
  return bundle();
});
