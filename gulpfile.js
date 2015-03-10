
// Require

var gulp    = require('gulp'),
    uglify  = require('gulp-uglify'),
    connect = require('gulp-connect');


// Helpers

function handle (error) {
  console.log(error);
  this.emit('end');
}


// Tasks

gulp.task('server', function () {
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('build', function () {
  return gulp.src('src/*.js')
    .pipe(uglify('pixelRuler.min.js'))
    .on('error', handle)
    .pipe(gulp.dest('public'))
    .pipe(gulp.dest('dist'));
});


// Register

gulp.task('develop', [ 'server', 'build' ], function () {
  gulp.watch(['src/*.js'], [ 'build' ]);
  gulp.watch(['public/**']).on('change', function reload (files) {
    gulp.src(files.path).pipe(connect.reload());
  });
});

gulp.task('default', [ 'build' ]);

