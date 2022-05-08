const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

const browserSyncJob = () => {
  browserSync.init({
    server: "build/"
  });

  watch('app/sass/**/*.scss', buildSass);
  watch('app/pages/**/*.pug', buildPug);
};

const buildSass = () => {
  console.log('Compiling SASS');

  return src('app/sass/main.scss')
    .pipe(sass())
    .pipe(dest('build/styles/'))
    .pipe(browserSync.stream());
}

const buildPug = () => {
  console.log('Compiling Pug');

  return src('app/pages/*.pug')
    .pipe(pug())
    .pipe(dest('build/'))
    .pipe(browserSync.stream());
}

exports.server = browserSyncJob;
exports.build = parallel(buildSass, buildPug);
exports.dev = series(parallel(buildSass, buildPug), browserSyncJob);
