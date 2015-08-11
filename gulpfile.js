;
(function () {
    'use strict';

    var gulp = require('gulp');
    var wrap = require('gulp-wrap');
    var sass = require('gulp-sass');
    var watch = require('gulp-watch');
    var concat = require('gulp-concat');
    var notify = require("gulp-notify");
    var declare = require('gulp-declare');

    // Source Path
    var SOURCE_SASS = 'resources/scss/**/*.scss';

    // Sass compilation
    gulp.task('sass', function () {
        gulp.src(SOURCE_SASS)
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('public/css'))
            .pipe(notify('Sass Compiled'));
    });

    // Watch task
    gulp.task('watch', function () {
        gulp.watch(SOURCE_SASS, ['sass']);
    });

    gulp.task('default', ['sass']);

})();
