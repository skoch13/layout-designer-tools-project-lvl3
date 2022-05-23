const gulp = require('gulp');
const images = require('./gulp/images');
const spriteSVG = require('./gulp/spriteSVG');
const pug2html = require('./gulp/pug2html');
const styles = require('./gulp/styles');
const scripts = require('./gulp/scripts');
const clean = require('./gulp/clean');
const serve = require('./gulp/serve');

const { series, parallel } = gulp;

const dev = parallel(images, spriteSVG, pug2html, styles, scripts);

exports.images = images;
exports.spriteSVG = spriteSVG;
exports.pug2html = pug2html;
exports.styles = styles;
exports.scripts = scripts;
exports.clean = clean;
exports.serve = serve;

exports.default = series(clean, dev, serve);
