const gulp = require('gulp');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');

module.exports = function script() {
  return gulp.src([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/@popperjs/core/dist/umd/popper.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './app/js/main.js'
  ])
  .pipe(plumber())
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('build/js/'));
}
