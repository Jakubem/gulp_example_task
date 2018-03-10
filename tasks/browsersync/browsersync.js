import paths from '../paths';
const browserSync = require('browser-sync').create();

module.exports = function(gulp, plugins) {
    return function() {
        browserSync.init({
            server: {
                baseDir: "./dest"
            }
        })
        gulp.watch("./dest/**/*").on('change', browserSync.reload);
    };
};
