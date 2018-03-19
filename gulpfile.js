

// Require Gulp first!
var gulp = require('gulp');
var uglify = require('gulp-uglify'),
  rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');

var sass = require("gulp-sass");
var prettyError = require('gulp-prettyerror');


var autoprefixer = require("gulp-autoprefixer"),
  cssnano = require("gulp-cssnano"),
  rename = require("gulp-rename");

// This is a very basic Gulp task,
// with a name and some code to run
// when this task is called:
// gulp.task("default", function() {
//   console.log("Hello world");
// });


// Now that we've installed the uglify package we can require it:

gulp.task('scripts', ['lint'], function() {
  return gulp
    .src('./js/*.js') // What files do we want gulp to consume?
    .pipe(uglify()) // Call the uglify function on these files
    .pipe(rename({ extname: '.min.js' })) // Rename the uglified file
    .pipe(gulp.dest('./build/js')); // Where do we put the result?
});



// gulp watch


gulp.task('watch', function() {
   gulp.watch(['js/*.js', 'sass/*.scss', '*.html'] , ['lint', 'scripts', 'reload']);
});

// browsersync

gulp.task('reload', ['scripts','sass','lint'], function() {
    browserSync.reload();
 });


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass','lint','browser-sync','scripts', 'watch', ])
// gulp-eslint






    gulp.task('lint',function() {
        return gulp.src(['js/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
    

gulp.task("sass", function() {
    return gulp
      .src("sass/style.scss")
      .pipe(prettyError())
      .pipe(sass())
      .pipe(
        autoprefixer({
          browsers: ["last 2 versions"]
        })
      )
      .pipe(gulp.dest("./build/css"))
      .pipe(cssnano())
      .pipe(rename("style.min.css"))
      .pipe(gulp.dest("./build/css"));
  });


  
 


 
