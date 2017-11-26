import paths from '../paths';
const browserSync = require('browser-sync').create();

module.exports = function(gulp, plugins) {
    return function() {
        browserSync.init({
            server: {
                baseDir: "./dist"
            }
        })
        gulp.watch("./dist/**/*").on('change', browserSync.reload);
    };
};
