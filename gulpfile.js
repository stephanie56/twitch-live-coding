var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('./app/assets/styles/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/assets/styles/**/*.scss', ['sass']);
});
