;
(function () {
    'use strict';

    var gulp        = require('gulp'),
        wrap        = require('gulp-wrap'),
        sass        = require('gulp-sass'),
        watch       = require('gulp-watch'),
        concat      = require('gulp-concat'),
        notify      = require("gulp-notify"),
        declare     = require('gulp-declare'),
        //Css Minify
        minifyCss   = require('gulp-minify-css'),
        rename      = require('gulp-rename'),
        //Js Minify
        uglify = require('gulp-uglify');

    // Source Path
    var SOURCE_SASS = 'resources/scss/**/*.scss';

    // Sass Compilation
    gulp.task('sass', function () {
        gulp.src('resources/scss/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('public/css'))
            .pipe(concat('style.css'))
            .pipe(gulp.dest('public/css'))
            .pipe(minifyCss({keeSpecialComments:1}))
            .pipe(rename('style.min.css'))
            .pipe(gulp.dest('public/css'))
            .pipe(notify('Sass Compiled'));
    });

    gulp.task('compress', function() {
      return gulp.src('resources/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
    });


    // Watch task
    gulp.task('watch', function () {
        gulp.watch(SOURCE_SASS, ['sass']);
    });

    gulp.task('default', ['sass']);    

})();