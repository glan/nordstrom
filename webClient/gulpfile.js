'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['jshint', 'browserify', 'less']);

// JSHint task
gulp.task('jshint', function () {
    //var hintResults = [];
    return gulp.src(['gulpfile.js', './src/js/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// Browserify (with sourcemaps) task
gulp.task('browserify', function () {
    return gulp.src('./src/js/main.js', {
            read: false
        })
        .pipe(browserify({
            debug: true
        }))
        .pipe(gulp.dest('./public/js/'));
});

// LESS (with sourcemaps) task
gulp.task('less', function () {
    var a = gulp.src('./src/styles/main.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/styles'));
});
