import paths from '../paths';

module.exports = function(gulp, plugins) {
    return function() {
        gulp.src(paths.src.js)
            .pipe(plugins.eslint())
            .pipe(plugins.eslint.format())
            .pipe(gulp.dest(paths.dist.js));
        console.log('eslintzrobion');
    };
};
