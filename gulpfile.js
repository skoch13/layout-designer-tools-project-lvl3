const { src, dest, parallel, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

const browserSyncJob = () => {
  browserSync.init({
    server: "build/"
  });

  watch('app/scss/*.scss', buildSass);
  watch('app/*.pug', buildPug);
};

const buildSass = () => {
  console.log('Компиляция SASS');

  return src('app/scss/*.scss')
    .pipe(sass())
    .pipe(dest('build/styles/'))
    .pipe(browserSync.stream());
}

const buildPug = () => {
  console.log('Компиляция Pug');

  return src('app/*.pug')
    .pipe(pug(
      {pretty: true}
    ))
    .pipe(dest('build/'))
    .pipe(browserSync.stream());
}

exports.server = browserSyncJob;
exports.build = parallel(buildSass, buildPug);
exports.go = series(build, server);