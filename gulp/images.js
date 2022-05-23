const gulp = require('gulp');
const plumber = require('gulp-plumber');

module.exports = function images() {
  return gulp.src([
    './app/images/**/*.{gif,png,jpg,svg,webp}',
    '!app/images/icons/**/*'
  ])
    .pipe(plumber())
    .pipe(gulp.dest('build/images/'))
};
