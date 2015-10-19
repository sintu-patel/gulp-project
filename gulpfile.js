var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var minifyCSS = require('gulp-minify-css');

gulp.task('javascript', function() {
  return gulp.src('dev/javascript/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('javascript.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dev/assets/js/'));
});

gulp.task('compass', function() {
  gulp.src('dev/sass/style.scss')
    .pipe(compass({
      css: 'assets/css',
      sass: 'dev/sass/'
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('assets/css'));
});