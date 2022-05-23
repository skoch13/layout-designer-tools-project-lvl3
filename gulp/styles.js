const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const gulpStylelint = require('gulp-stylelint');
const rename = require('gulp-rename');

module.exports = function styles() {
  return gulp.src('app/scss/custom.scss')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulpStylelint({
      fix: true,
      failAfterError: false,
      reporters: [{ formatter: 'string', console: true }],
      debug: true
    }))
    .pipe(rename({
      basename: "style"
    }))
    .pipe(gulp.dest('build/css/'))
}