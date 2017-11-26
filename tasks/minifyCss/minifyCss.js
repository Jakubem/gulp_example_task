import paths from '../paths';

module.exports = function(gulp, plugins) {
    return function() {
        gulp.src(paths.src.sass)
            .pipe(plugins.cleanCss({ compatibility: 'ie8' }))
            .pipe(gulp.dest(paths.dist.css));
    };
};
