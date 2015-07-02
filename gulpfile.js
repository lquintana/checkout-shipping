/**
 * Dependencies
 */
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concate = require('gulp-concat'),
    handlebars = require('gulp-handlebars'),
    wrap = require('gulp-wrap'),
    declare = require('gulp-declare'),
    sass = require('gulp-sass'),
    size = require('gulp-size'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    minifyCSS = require('gulp-minify-css'),
    clean = require('gulp-clean');

/**
 * Default tasks
 */

gulp.task('templates', function(){
    gulp.src(['app/templates/**/*.hbs'])
        .pipe(handlebars())
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
            namespace: '__templates',
            noRedeclare: true, // Avoid duplicate declarations
        }))
        .pipe(concate('templates.js'))
        .pipe(gulp.dest('.temp'));
});

gulp.task('js-build', function() {
    gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/handlebars/handlebars.js',
        'bower_components/underscore/underscore.js',
        'node_modules/socket.io-client/socket.io.js',
        'bower_components/backbone/backbone.js',
        'bower_components/backbone.iobind/backbone.iosync.js',
        'bower_components/backbone.iobind/backbone.iobind.js',
        'bower_components/jquery-mockjax/jquery.mockjax.js',

        'mocks/mock.js',
        /////// APPLICATION ///////
        // templates
        '.temp/templates.js',

        // app init
        'app/app.js',
        'app/utils/handlebars-helpers.js',

        // chat files
        'app/models/**/*.js',
        'app/collections/**/*.js',
        'app/views/**/*.js',
        'app/router.js'
    ])
    .pipe(concate('bundle.js'))
    .pipe(size({
        title: 'JS size:'
    }))
    .pipe(gulp.dest('build/scripts/'));
});

gulp.task('js-full', ['templates'], function() {
    setTimeout(function () {
        gulp.start(['js-build']);
    }, 100);
});

gulp.task('js-dist', function() {
    gulp.src([
        'build/scripts/bundle.js',
    ])
    .pipe(uglify())
    .pipe(size({
        title: 'JS size:'
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('styles-build', function() {
    gulp.src([
            'app/styles/*'
        ])
        .pipe(sass({
            style: 'expanded'
        }))
        .pipe(autoprefixer({
            browsers: ['last 5 versions','Firefox ESR']
        }))
        .pipe(concate('bundle.css'))
        .pipe(size({
            title: 'CSS size:'
        }))
        .pipe(gulp.dest('build/styles/'));
});

gulp.task('styles-dist', function() {
    gulp.src([
            'build/styles/bundle.css'
        ])
        .pipe(minifyCSS())
        .pipe(size({
            title: 'CSS size:'
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('clean-build', function () {
    return gulp.src('build', {read: false})
        .pipe(clean());
});

gulp.task('clean-dist', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('default', ['clean-build', 'js-full', 'styles-build']);
gulp.task('build', ['default']);
gulp.task('dist', ['build', 'clean-dist'],function(){
    setTimeout(function () {
        gulp.start(['js-dist', 'styles-dist']);
    }, 100);
});

gulp.task('watch', function() {
    gulp.start('default');
    gulp.watch([
        'app/*.js',
        'app/**/*.js',
        'mocks/mock.js'
    ], ['js-build']);
    gulp.watch('app/templates/**/*.hbs', ['js-full','templates']);
    gulp.watch('app/styles/**/*.scss', ['styles-build']);
});
