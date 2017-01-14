var gulp = require('gulp');
var sass = require('gulp-sass');


// style task
// Sass
gulp.task('sass', function(){
  return gulp.src('./app/assets/styles/**/*.scss')
    .pipe(sass({
      style:'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/assets/styles/**/*.scss', ['sass']);
});
