const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

// Compile SCSS
function style() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
}

// Watch files
function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./src/scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
exports.default = watch;
