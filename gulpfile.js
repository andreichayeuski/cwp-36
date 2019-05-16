var gulp = require("gulp"),
	watch = require('gulp-watch'),
	webpack = require('webpack');

const browserSync = require('browser-sync').create();

gulp.task('browser-sync', () => {
	browserSync.init({
		server: './public',
		open: 'local'
	});
});

gulp.task('watch', () => {
	gulp.watch('./public/*.css', gulp.series('build-scripts'));
	gulp.watch('./public/*.js', gulp.series('build-scripts'));
});


gulp.task('build-scripts', done => {
	browserSync.reload();
	webpack(require('./webpack.config.js'),
		(err, stats) => {
			//console.log(stats);
			if (err) throw new util.PluginError('webpack', err);
		});
	done();
});