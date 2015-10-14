var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('javascript', function() {
  return gulp.src('dev/javascript/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('javascript.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dev/assets/js/'));
});