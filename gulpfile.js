var gulp = require('gulp');

var stream = require('event-stream');
 
var concat = require('gulp-concat');

var less = require('gulp-less');

var uglify = require('gulp-uglify');

var minifyCss = require('gulp-minify-css');

var minifyHtml = require('gulp-minify-html');


var templateCache = require('gulp-angular-templatecache');

//https://www.npmjs.com/package/gulp-rename
var rename = require('gulp-rename');

//npm install --save-dev gulp-jshint 
var jshint = require('gulp-jshint');
//npm install --save-dev jshint-stylish

//https://github.com/tschortsch/gulp-bootlint
//https://github.com/twbs/bootlint/wiki
//var bootlint = require('gulp-bootlint');

var path = {
    js: ['src/app/**/*.js'],
    less: ['src/assets/**/*.less'],
    css: ['src/assets/**/*.css'],
    coypFiles: ['src/assets/css'],
    html: ['src/**/*.html']
};

gulp.task('js', function () { 

    gulp.src(path.js,{base:'src'})
        .pipe(uglify())
        .pipe(gulp.dest('dist'));

});

gulp.task('html', function(){

    gulp.src(path.html,{base:'src'})
        .pipe(minifyHtml())
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
    
});

gulp.task('assets', function () {
    gulp.src(['src/assets/**/*.*', '!src/assets/**/*.less'], { base: 'src' })
        .pipe(gulp.dest('dist'));
});

gulp.task('api.test', function () {
    gulp.src(['src/api.test/**/*.*'], { base: 'src' })
        .pipe(gulp.dest('dist'));
});

gulp.task('jshint', function () {

    gulp.src(path.js)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('route', function () {
    //合并所有route
});

gulp.task('less', function () {

    gulp.src(['src/assets/theme/*/less/bootstrap.less','src/assets/theme/*/less/style.less'])
        .pipe(less())
        .pipe(minifyCss())
        .pipe(rename(function(path){
            console.log(path);
            path.dirname = path.dirname.replace('\\less','\\css');
            path.extname = '.min.css'
        }))
        .pipe(gulp.dest('src/assets/theme/'));

});



/*
gulp.task('bootlint', function () {
    gulp.src(path.html)
        .pipe(bootlint({
            disabledIds: ['E001', 'W001', 'W002', 'W003', 'W005']
        }));
});
*/



gulp.task('watch', function () {
    gulp.watch(path.less, ['less']);
});

gulp.task('default', ['html', 'css', 'js']);

gulp.task('publish', ['jshint', 'less', 'html', 'css', 'js', 'assets', 'api.test']);