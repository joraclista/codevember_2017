var gulp = require('gulp'),
    log = require('gulp-util').log,
    stylus = require('gulp-stylus'),
    browserSync = require('browser-sync'),
	del = require('del'),
	rename = require("gulp-rename")
	slim = require("gulp-slim");


gulp.task('slim', function(){
  gulp.src('./src/**/*.slim')
    .pipe(slim({
      pretty: true
    }))
    .pipe(gulp.dest('./public/'));
});

gulp.task('styles', function() {
  gulp.src('./src/**/*.stylus')
    .pipe(stylus())
	.pipe(rename(function (path) {
		  path.dirname = path.dirname.replace("stylus", "css");
    }))
    .pipe(gulp.dest('./public/'))
});

gulp.task('copy-files', function() {
  gulp.src('./src/**/*')
    .pipe(gulp.dest('./public'))
});

gulp.task('watch', function() {
	log('Watching files');
	gulp.watch('./src/**/*', ['build']);
});

gulp.task('browserSync', ['build'], function() {
  browserSync({
    server: {
      baseDir: './public'
    }
  });
});

gulp.task('clean', function() {
  console.log('cleaning public dir.....');
  return del.sync(['./public/js/*', './public/css/*', './public/stylus/*', './public/*.*']);
});


gulp.task('echo', function() {
  console.log('Hi there!');
});

//define cmd line default task
gulp.task('build', ['clean', 'copy-files', 'styles', 'slim']);
gulp.task('default', ['build', 'watch', 'browserSync']);