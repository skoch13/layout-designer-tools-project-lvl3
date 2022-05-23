const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();
const svgSprite = require('gulp-svg-sprite');

const browserSyncJob = () => {
  browserSync.init({
    server: "build/"
  });

  watch('app/scss/**/*.scss', buildSass);
  watch('app/pages/**/*.pug', buildPug);
};

const buildSass = () => {
  console.log('Compiling SASS');

  return src('app/scss/main.scss')
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

const copyImages = () => {
  console.log('Copying images');

  return src('app/images/*.jpg').pipe(dest('build/images'))
}

const prepareSvg = () => {
  console.log('Preparing SVGs');

  const config = {
    mode: {
      symbol: {
        sprite: 'sprite.svg'
      }
    }
  }

  return src('app/images/icons/*.svg').pipe(svgSprite(config)).pipe(dest('build/images'))
}

const build = parallel(buildSass, buildPug, copyImages, prepareSvg);

exports.server = browserSyncJob;
exports.build = build;
exports.dev = series(build, browserSyncJob);
