var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    merge = require('merge2'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del');


var tsProject = ts.createProject('tsconfig.json');

var path = {
    source: './wwwroot/app',
    origin: ['./Scripts/app/**/*.ts', './Scripts/app/**/*.html']
};

gulp.task('copy:files', function () {
    gulp.src('./Scripts/app/**/*.{ts,html}')
        .pipe(gulp.dest('./wwwroot/app'))
})

gulp.task('compile:files', ['copy:files'], function () {
    var tsResult = tsProject.src(path.source + '/**/*.ts')
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(tsProject());

    return tsResult.js
        .pipe(sourcemaps.write({ includeContent: false, sourceRoot: '' }))
        .pipe(gulp.dest('./wwwroot/app'));
});


gulp.task('delete', function (cb) {
    return del(['./wwwroot/app/'], cb);
})

gulp.task('default', ['compile:files']);