module.exports = () => 
 $.gulp.task('watch', () => {
     for(key in $.path.watch){
        const pathW = $.path.watch[key]
        $.gulp.watch(pathW, $.gulp.series(key))
     }
 }) 