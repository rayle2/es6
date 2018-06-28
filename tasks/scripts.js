import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack'; // webpack插件
import gulpWebpack from 'webpack-stream'; // webpack使用时需要附带上
import named from 'vinyl-named';  // 用来保持输入和输出的文件名相同的插件
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber'; // 防止来自 gulp 插件错误导致中断操作的插件
import rename from 'gulp-rename'; // 重命名插件
import uglify from 'gulp-uglify'; // js 代码混淆压缩插件
import {log, colors} from 'gulp-util';
import args from './util/args';

gulp.task('scripts', () => {
	return gulp.src(['app/js/index.js'])
		.pipe(plumber({ // 将错误通过errorHandle输出
			errorHandle: function () {
				// 省略
			}
		}))
		.pipe(named()) //vinyl-named用来保持输入和输出的文件名相同, 否则会自动生成一个hash.
		.pipe(gulpWebpack({ // 使用 webpack 对 js 文件通过 babel 进行转义
			module: { // 这是 webpack 的调用模块写法
				loaders: [{
					test: /\.js$/,
					loader: 'babel-loader' // 使用 babel loader
				}]
			}
		}), null, (err, stats) => {
			log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
				chunks: false
			}))
		})
		.pipe(gulp.dest('server/public/js')) // 输出处理后的 js 文件
		.pipe(rename({ // 重命名，这里是对 js 文件压缩后的文件命名
			basename: 'cp',
			extname: '.min.js'
		}))
		.pipe(uglify({compress: {properties: false}, output: {'quote_keys': true}})) // 压缩文件
		.pipe(gulp.dest('server/public/js')) // 重新输出处理后的 js 文件
		.pipe(gulpif(args.watch, livereload())) // watch 监听文件并自动刷新
})