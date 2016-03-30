import gulp       from 'gulp';
import uglify     from 'gulp-uglify';
import grename    from 'gulp-rename';
import source     from 'vinyl-source-stream';
import buffer     from 'vinyl-buffer';
import browserify from 'browserify';
import gbabel     from 'gulp-babel';
import globalShim from 'browserify-global-shim';

const build_path     = 'dist';
const transpile_path = 'lib';

gulp.task('transpile', () => {
  return gulp.src(['./src/**/*', './dev/dev.jsx'])
    .pipe(gbabel({presets: ['es2015', 'react', 'stage-0']}))
    .pipe(gulp.dest(transpile_path));
});

gulp.task('browserify', () => {
  return browserify('./src/index.js')
    .transform('babelify', {presets: ['es2015', 'react', 'stage-0']})
    .transform(globalShim.configure({
      'react': 'React',
      'react-dom': 'ReactDOM'
    }))
    .bundle()
    .pipe(source('react-semanticui-forms.js'))
    .pipe(gulp.dest(build_path))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(grename('react-semanticui-forms.min.js'))
    .pipe(gulp.dest(build_path));
});

gulp.task('browserify-dev', () => {
  return browserify('./dev/dev.jsx')
    .transform('babelify', {presets: ['es2015', 'react', 'stage-0']})
    .transform(globalShim.configure({
      'react': 'React',
      'react-dom': 'ReactDOM'
    }))
    .bundle()
    .pipe(source('bundle-dev.js'))
    .pipe(gulp.dest(transpile_path))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(grename('bundle-dev.min.js'))
    .pipe(gulp.dest(transpile_path));
});

gulp.task('watch', (done) => {
  gulp.watch(['./src/**/*', './dev/**/*'], gulp.series('build'));
  done();
});

gulp.task('build', gulp.series('transpile', 'browserify', 'browserify-dev'));
gulp.task('dev', gulp.series('build', 'watch'));
gulp.task('default', gulp.series('build'));
