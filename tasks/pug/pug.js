import paths from '../paths';

module.exports = function (gulp, plugins) {
  return function () {
    gulp.src(paths.src.pug + '/*.pug')
      .pipe(plugins.pug({
        pretty: false
      }))
      .pipe(gulp.dest(paths.dist.html));
  };
};
