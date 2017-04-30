var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var del = require('del');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');

gulp.task('clean', function () {
  return del('dist/**')
})

gulp.task('es5', ['clean'], function () {
  return gulp
    .src('src/**/*.js')
    .pipe(babel({
      presets: ['react', 'es2015'],
      plugins: ['transform-class-properties', 'transform-object-rest-spread'],
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/es5'))
})

gulp.task('es6', ['clean'], function () {
  return gulp
    .src('src/**/*.js')
    .pipe(babel({
      presets: ['react'],
      plugins: ['transform-class-properties', 'transform-object-rest-spread'],
    }))
    .pipe(gulp.dest('dist/es6'))
})

gulp.task('css', ['clean'], function () {
  return gulp
    .src('./node_modules/ilyabirman-likely/release/likely.css')
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('dist'))
})


gulp.task('debug:es5', function () {
  return watch('src/**/*.js', { ignoreInitial: false })
    .on('change', function(file){
      gutil.log('File "' + file + '" has changed, rebuild')
    })
    .pipe(plumber())
    .pipe(babel({
      presets: ['react', 'es2015'],
      plugins: ['transform-class-properties', 'transform-object-rest-spread'],
    }))
    .on('change', function(file){
      gutil.log('File "' + file + '" DONE')
    })
    .pipe(gulp.dest('dist/es5'));
})

gulp.task('debug:es6', function () {
  return watch('src/**/*.js', { ignoreInitial: false })
    .on('change', function(file){
      gutil.log('File "' + file + '" has changed, rebuild')
    })
    .pipe(plumber())
    .pipe(babel({
      presets: ['react'],
      plugins: ['transform-class-properties', 'transform-object-rest-spread'],
    }))
    .on('change', function(file){
      gutil.log('File "' + file + '" DONE')
    })
    .pipe(gulp.dest('dist/es6'));
})

gulp.task('default', ['css', 'es5', 'es6'])

gulp.task('debug', ['default', 'debug:es5', 'debug:es6'])
