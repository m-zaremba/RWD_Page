var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');
var sassGlob = require('gulp-sass-glob');

var sassSrc = 'sass/**/*.scss';


gulp.task('sass', function() {
  return gulp.src('sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(
      sass({
        errLogToConsole: true,
        outputStyle: 'extended'
      })
        .on('error', sass.logError)
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
});

gulp.task('watch', ['sass'], function() {
  gulp.watch(sassSrc, ['sass']);
});

gulp.task('jshint', function() {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
});
