import paths from '../paths';

module.exports = function(gulp, plugins) {
    return function() {
        gulp.src(paths.src.js)
            .pipe(plugins.babel())
            .pipe(gulp.dest(paths.dist.js));
    };
};
