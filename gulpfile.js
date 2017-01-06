var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    path = require('path'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    htmlmin = require('gulp-htmlmin'),
    minifyCss = require('gulp-minify-css');

gulp.task('scripts', function() {
    return gulp.src(['./mainPage.htm', './pages/ru/utoAnswers.htm'])
        .pipe(concat('home.htm'))
        .pipe(gulp.dest('./bundle/'));
});
//Uglifies

gulp.task('uglifying', function() {
    return gulp.src('utoApp.js')
        .pipe(uglify()).on('error', gutil.log)
        .pipe(gulp.dest('dist/'));
});

gulp.task('minify-css', function() {
    return gulp.src('styles/utoStyle.css')
        .pipe(minifyCss()).on('error', gutil.log)
        .pipe(gulp.dest('minified/bundle'));
});

gulp.task('styles', function() {
    console.log('runs styles');
});

gulp.task('imagemin', function() {
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

gulp.task('minifyHtm', function() {
    return gulp.src('minified/home.htm')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./'))
});
/*
gulp.task('minifyJs', function() {
    return gulp.src('minified/bundle.js')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./'))
});
*/
gulp.task('concatHtml', function() {
    return gulp.src(['mainPage.htm', 'pages/ru/*.htm'])
        .pipe(concat('home.htm'))
        .pipe(gulp.dest('minified'));
});

gulp.task('concatJs', function() {
    return gulp.src('utoApp.js')
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('minified'));
});

gulp.task('watch', function() {
    gulp.watch('utoApp.js', ['uglifying']);
    gulp.watch('styles/utoStyle.css', ['minify-css']);
    gulp.watch('pages/ru/*.htm', ['minify-html']);
})

gulp.task('default', ['concatHtml',/* 'concatJs',*/ 'minifyHtm'/*, 'minifyJs''minify-css'*/,'imagemin' ]);
