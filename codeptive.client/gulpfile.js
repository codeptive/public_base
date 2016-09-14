// codeptive gulp client 

'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');

// Task sequence
var tasks = [
    'build-vendor-js',
    'build-app-js',
    'build-vendor-css',
    'build-app-css',
    'images',
    'html'
];

// Settings
var DEST = '../src/codeptive.web/wwwroot';
var src = {};

// JS
gulp.task('build-vendor-js', function () {
    // src.assets = 'build/vendor/**/*.js';
    src.assets = [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/jquery-ui/jquery-ui.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'src/vendor/**/*.js'
    ]
    return gulp.src(src.assets)
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest(DEST + '/js'))
});

gulp.task('build-app-js', function () {
    src.assets = 'build/**/*.js';
    return gulp.src(src.assets)
      .pipe(concat('app.js'))
      .pipe(gulp.dest(DEST + '/js'))
});

// CSS
gulp.task('build-vendor-css', function () {
    src.css = [
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'src/vendor/**/*.css'
    ];
    return gulp.src(src.css)
      .pipe(concat('vendor.css'))
      .pipe(gulp.dest(DEST + '/css'))
});

gulp.task('build-app-css', function () {
    src.css = 'src/css/**/*.css';
    return gulp.src(src.css)
      .pipe(concat('app.css'))
      .pipe(gulp.dest(DEST + '/css'))
});

// Images
gulp.task('images', function () {
    src.images = 'src/img/**';
    return gulp.src(src.images)
      .pipe(gulp.dest(DEST + '/img'));
});

// HTML pages
gulp.task('html', function () {
    src.pages = 'src/**/*.html';
    return gulp.src(src.pages)
      .pipe(gulp.dest(DEST))
});

// The default task
gulp.task('default', tasks);