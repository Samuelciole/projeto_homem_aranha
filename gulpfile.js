const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles (){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));

}

function watchFiles() {
    gulp.watch('./src/styles/**/*.scss', styles);
  }

exports.default = gulp.parallel(styles, watchFiles);