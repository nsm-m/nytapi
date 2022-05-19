/* eslint-disable @typescript-eslint/no-var-requires */

const { src, dest, parallel, series, watch } = require('gulp');

// var gulp = require('gulp');
var uglify = require('gulp-uglify'),
  rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');

var sass = require('gulp-sass')(require('sass'));
var prettyError = require('gulp-prettyerror');


var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');


//v4 scripts uglify 
function jsuglify() {
  return src('./js/*.js') // What files do we want gulp to consume?
    .pipe(uglify()) // Call the uglify function on these files
    .pipe(rename({ extname: '.min.js' })) // Rename the uglified file
    .pipe(dest('./build/js'), { sourcemaps: '.' }); // Where do we put the result?
}



//v4 static server
function staticServer(cb) {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  cb();
}



// V4 BrowserSync reload 
function browserReload(cb) {
  browserSync.reload();
  cb();
}










// gulp-eslint



//gulp 4 lint
function linting() {
  return src(['js/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}


//gulpv4 sass task
function styleSass() {
  return src('sass/style.scss', { sourcemaps: true })
    .pipe(prettyError())
    .pipe(sass())
    .pipe(
      autoprefixer({
 
      })
    )
    .pipe(dest('./build/css'), { sourcemaps: '.' })
    .pipe(cssnano())
    .pipe(rename('style.min.css'))
    .pipe(dest('./build/css'), { sourcemaps: '.' });
}

function watchFiles(cb) {
  // Watch SCSS changes    
  // watch(paths.scss + '**/*.scss', parallel(styles))
  //   .on('change', browserReload());
  // // Watch javascripts changes    
  // watch(paths.js + '*.js', parallel(jsuglify))
  //   .on('change', browserReload());
  // // Watch lintining
  // watch(paths.js + '*.js', parallel(linting))
  //   .on('change', browserReload());

  watch('*.html', browserReload);
  watch(['sass/*.scss', 'js/*.js'], series(styleSass, jsuglify, browserReload));
  cb();
}




const watching = parallel(watchFiles, staticServer, linting);

//exports.js = jsuglify;
//exports.sass = styleSass;
exports.default = series(styleSass, jsuglify, staticServer, watchFiles);
exports.watch = watching;

/////

// V3 Static server
// gulp.task('browser-sync', function () {
//   browserSync.init({
//     server: {
//       baseDir: './'
//     }
//   });
// });


// V3 browsersync reload

// gulp.task('reload', ['scripts', 'sass', 'lint'], function () {
//   browserSync.reload();
// });



//gulp 3 lint
// gulp.task('lint', function () {
//   return gulp.src(['js/*.js', '!node_modules/**'])
//     .pipe(eslint())
//     .pipe(eslint.format())
//     .pipe(eslint.failAfterError());
// });

// Now that we've installed the uglify package we can require it:
//v3 js scripts uglify
// gulp.task('scripts', ['lint'], function () {
//   return gulp
//     .src('./js/*.js') // What files do we want gulp to consume?
//     .pipe(uglify()) // Call the uglify function on these files
//     .pipe(rename({ extname: '.min.js' })) // Rename the uglified file
//     .pipe(gulp.dest('./build/js')); // Where do we put the result?
// });


//gulpv3 sass task

// gulp.task('sass', function () {
//   return gulp
//     .src('sass/style.scss')
//     .pipe(prettyError())
//     .pipe(sass())
//     .pipe(
//       autoprefixer({
//         browsers: ['last 2 versions']
//       })
//     )
//     .pipe(gulp.dest('./build/css'))
//     .pipe(cssnano())
//     .pipe(rename('style.min.css'))
//     .pipe(gulp.dest('./build/css'));
// });

// gulp watch v3


// gulp.task('watch', function () {
//   gulp.watch(['js/*.js', 'sass/*.scss', '*.html'], ['lint', 'scripts', 'reload']);
// });
