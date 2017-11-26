import gulp from 'gulp';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import browserify from 'gulp-browserify';
import pug from 'gulp-pug';
import rev from 'gulp-rev';
import tap from 'gulp-tap';
import watch from 'gulp-watch';
import eslint from 'gulp-eslint';
import uglifyJs from 'gulp-uglify';
import minifyCss from 'gulp-cssmin';

const plugins = require('gulp-load-plugins')();

function getTask(task) {
    return require('./tasks/' + task + '/' + task)(gulp, plugins);
};

// compile sass into css + concat + autoprefix + minify
gulp.task('sass', getTask('sass'));

// compile pug into html
gulp.task('pug', getTask('pug'));

// run browser sync
gulp.task('browserSync', getTask('browserSync'));

gulp.task('babel', getTask('babel'));
gulp.task('eslint', getTask('eslint'));
gulp.task('uglifyJs', getTask('uglifyJs'));
gulp.task('minifyCss', getTask('minifyCss'));

gulp.watch("src/views/*.pug", ['pug']);
gulp.watch("src/sass/*.scss", ['sass']);
gulp.watch("src/js/*.js", ['uglifyJs']);

// development task 
gulp.task('dev', ['eslint']);

// production build task
gulp.task('default', ['sass', 'pug', 'uglifyJs']);
