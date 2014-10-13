var gulp = require('gulp');
var config = require('../Elixir').config;
var plugins = require('gulp-load-plugins')();

/*
 |----------------------------------------------------------------
 | Stylus Compilation Task
 |----------------------------------------------------------------
 |
 | This task will compile your Stylus, including minification and
 | and auto-prefixing. Stylus is one of the CSS pre-processors
 | supported by Elixir, along with Less and Sass CSS processors.
 |
 */

gulp.task('stylus', function() {
    var onError = function(err) {
        plugins.notify.onError({
            title:    "Laravel Elixir",
            subtitle: "Stylus Compilation Failed!",
            message:  "Error: <%= error.message %>",
            icon: __dirname + '/../icons/fail.png'
        })(err);

        this.emit('end');
    };

    return gulp.src(config.preprocessors.stylus.src)
        .pipe(plugins.stylus()).on('error', onError)
        .pipe(plugins.autoprefixer())
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest(config.preprocessors.stylus.output))
        .pipe(plugins.notify({
            title: 'Laravel Elixir',
            subtitle: 'Stylus Compiled!',
            icon: __dirname + '/../icons/laravel.png',
            message: ' '
        }));
});