import paths from '../paths';

module.exports = function(gulp, plugins) {
  let revedJsFileName;
    return function() {
        gulp.src(paths.src.js)
            .pipe(plugins.concat('main.min.js'))
            .pipe(plugins.babel())
            .pipe(plugins.uglify())
            .pipe(plugins.rename('main.min.js'))
            .pipe(plugins.browserify())
            .pipe(gulp.dest(paths.dist.js));
    };
};
