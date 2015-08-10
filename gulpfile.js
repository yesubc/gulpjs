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
    var handlebars = require('gulp-handlebars');

    // Source Path
    var SOURCE_SASS = 'resources/scss/**/*.scss';
    var SOURCE_HANDLEBARS = 'templates/*.html';

    // Handlebars compilation
    gulp.task('handlebars', function () {
        gulp.src(SOURCE_HANDLEBARS)
            .pipe(handlebars())
            .pipe(wrap('Handlebars.template(<%= contents %>)'))
            .pipe(declare({
                namespace: 'cummings.templates',
                noRedeclare: true
            }))
            .pipe(concat('templates.js'))
            .pipe(gulp.dest('public/js/'))
            .pipe(notify('Handlebars Compiled'));

    });

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
        gulp.watch(SOURCE_HANDLEBARS, ['handlebars']);
    });

    gulp.task('default', ['handlebars', 'sass']);

})();
