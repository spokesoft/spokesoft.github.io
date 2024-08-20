import gulp from "gulp";
import {
    buildAll,
    buildFavicons,
    buildIcons,
    buildScripts,
    buildStyles,
    buildViews,
    cleanAll,
    cleanFavicons,
    cleanIcons,
    cleanScripts,
    cleanStyles,
    cleanViews,
    defaultTask,
    watchAll,
    watchFavicons,
    watchIcons,
    watchScripts,
    watchStyles,
    watchViews,
} from "./build/index.js";

gulp.task("build:all", buildAll);
gulp.task("build:favicons", buildFavicons);
gulp.task("build:icons", buildIcons);
gulp.task("build:scripts", buildScripts);
gulp.task("build:styles", buildStyles);
gulp.task("build:views", buildViews);
gulp.task("clean:all", cleanAll);
gulp.task("clean:favicons", cleanFavicons);
gulp.task("clean:icons", cleanIcons);
gulp.task("clean:scripts", cleanScripts);
gulp.task("clean:styles", cleanStyles);
gulp.task("clean:views", cleanViews);
gulp.task("default", defaultTask);
gulp.task("watch:all", watchAll);
gulp.task("watch:favicons", watchFavicons);
gulp.task("watch:icons", watchIcons);
gulp.task("watch:scripts", watchScripts);
gulp.task("watch:styles", watchStyles);
gulp.task("watch:views", watchViews);
