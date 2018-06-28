import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';
import args from './util/args';

gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'serve']))