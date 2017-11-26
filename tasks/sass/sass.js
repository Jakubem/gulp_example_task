import paths from '../paths';
module.exports = function(gulp, plugins) {
    return function() {
        gulp.src(paths.src.sass)
            .pipe(plugins.sass())
            .pipe(plugins.autoprefixer(require('../../browserlist')))
            .pipe(plugins.concat('bundle.css'))
            .pipe(plugins.cleanCss())
            .pipe(gulp.dest(paths.dist.css));
        console.log('sasszrobion');
    };
};
