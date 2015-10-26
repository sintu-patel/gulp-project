var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');

// Scripts
gulp.task('javascript', function() {
  return gulp.src('dev/javascript/*.js')
    .pipe(concat('javascript.js'))
    .pipe(gulp.dest('dev/assets/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dev/assets/js'));
});

// Sass
gulp.task('compass', function() {
  gulp.src('dev/sass/style.scss')
    .pipe(compass({
      css: 'dev/assets/css',
      sass: 'dev/sass/'
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dev/assets/css'));
});

// Scsslint
gulp.task('scss-lint', function() {
  return gulp.src('dev/sass/*.scss')
    .pipe(scsslint());
});

gulp.task('connect', function() {
  connect.server({
    port: 9000,
    root: 'dev',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('dev/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['dev/*.html'], ['html'], ['compass'], ['javascript']);
});

gulp.task('default', ['connect', 'watch']);