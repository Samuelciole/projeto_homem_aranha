const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function html() {
  return gulp.src('./*.html') // pega todos os .html da raiz
    .pipe(gulp.dest('dist'));
}




function scripts(){
  return gulp.src ('./src/scripts/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js'))
}

function styles (){
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));

}

function watchFiles() {
    gulp.watch('./src/styles/**/main.scss', styles);
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
  }

exports.default = gulp.parallel(styles, watchFiles, scripts, html);