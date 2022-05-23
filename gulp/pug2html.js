const gulp = require('gulp');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const pugLinter = require('gulp-pug-linter');
const htmlLinter = require('gulp-htmlhint');

module.exports = function pug2html() {
  return gulp.src('app/pug/pages/*.pug')
    .pipe(plumber())
    .pipe(pugLinter({ reporter: 'default' }))
    .pipe(pug({
      pretty: true
    }))
    .pipe(htmlLinter('.htmlhintrc'))
    .pipe(gulp.dest('build/'))
};
