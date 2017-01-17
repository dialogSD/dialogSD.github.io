const gulp = require('gulp'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    cleanJs = require('gulp-uglify'),
    gulpSequence = require('gulp-sequence'),
    rename = require("gulp-rename"),
    concatCss = require('gulp-concat-css'),
    del = require('del');

gulp.task('imagemin', () => {
    return gulp.src('photos/*.png')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('minified/'));
});

gulp.task('cleanJs', () => {
    return gulp.src('./src/home.js')
        .pipe(cleanJs())
        .pipe(rename('index.js'))
        .pipe(gulp.dest(''));
});

gulp.task('concatHtml', () => {
    return gulp.src(['./src/pages/mainPage.htm', './src/pages/ru/*.htm'])
        .pipe(concat('home.html'))
        .pipe(gulp.dest('src'));
});

gulp.task('clearHtml', () => {
    return gulp.src('./src/home.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(''));
});

gulp.task('concatCss', () => {
    return gulp.src('./src/*/*.css')
        .pipe(concat('home.css'))
        .pipe(gulp.dest('src'));
});

gulp.task('cleanCss', () => {
    return gulp.src('src/home.css')
        .pipe(cleanCSS())
        .pipe(rename('index.css'))
        .pipe(gulp.dest(''));
});

gulp.task('concatJs', () => {
    return gulp.src('src/scripts/*.js')
        .pipe(concat('index.js'))
        .pipe(gulp.dest(''));
});

gulp.task('cleanJs', () => {
    return gulp.src('src/home.js')
        .pipe(uglify())
        .pipe(rename('index.js'))
        .pipe(gulp.dest(''));
});

gulp.task('clean', () => {
    return del([
        'src/home.css',
        'src/home.html',
        'src/home.js'
    ]);
});

gulp.task('watch', () => {
    gulp.watch('./src/styles/utoStyle.css', ['default']);
    gulp.watch('./src/pages/ru/*.htm', ['default']);
    gulp.watch('./src/mainPage.htm', ['default']);
});

gulp.task('default', gulpSequence(['concatHtml', 'concatCss', 'concatJs'], ['clearHtml', 'cleanCss', 'cleanJs'], 'clean'));
gulp.task('dev', gulpSequence('default', 'watch'));