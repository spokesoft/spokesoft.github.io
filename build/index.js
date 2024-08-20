import fs from "fs";
import gulp from "gulp";
import log from "fancy-log";

/*
 * Define the build tasks to process the source files into the respective directories.
 */

import buildFavicons from "./favicons/build.js";
import buildIcons from "./icons/build.js";
import buildScripts from "./scripts/build.js";
import buildStyles from "./styles/build.js";
import buildViews from "./views/build.js";

const buildAll = () => {
    const promises = [];
    promises.push(buildFavicons());
    promises.push(buildIcons());
    promises.push(buildScripts());
    promises.push(buildStyles());
    promises.push(buildViews());
    return Promise.all(promises);
};

/*
 * Define the clean tasks to remove the generated files from the respective directories.
 */

import cleanFavicons from "./favicons/clean.js";
import cleanIcons from "./icons/clean.js";
import cleanScripts from "./scripts/clean.js";
import cleanStyles from "./styles/clean.js";
import cleanViews from "./views/clean.js";

const cleanAll = () => {
    const promises = [];
    promises.push(cleanFavicons());
    promises.push(cleanIcons());
    promises.push(cleanScripts());
    promises.push(cleanStyles());
    promises.push(cleanViews());
    return Promise.all(promises);
}

/*
 * Define the watch tasks to watch for changes in the respective directories.
 * When changes are detected, it cleans the directory and then builds the corresponding files.
 */

import watchFavicons from "./favicons/watch.js";
import watchIcons from "./icons/watch.js";
import watchScripts from "./scripts/watch.js";
import watchStyles from "./styles/watch.js";
import watchViews from "./views/watch.js";

const watchAll = () => {
    const promises = [];
    promises.push(watchFavicons());
    promises.push(watchIcons());
    promises.push(watchScripts());
    promises.push(watchStyles());
    promises.push(watchViews());
    return Promise.all(promises);
}

/*
 * Define the default task to run when no specific task is provided.
 * It cleans all and then builds all.
 */

const defaultTask = () => {
    return new Promise((resolve, reject) => {
        cleanAll().then(() => buildAll().then(resolve)).catch(reject);
    });
}

/*
 * Add descriptions to the tasks for better readability in the CLI output.
 */

buildAll.description = "Build all";
buildFavicons.description = "Build favicons";
buildIcons.description = "Build icons";
buildScripts.description = "Build scripts";
buildStyles.description = "Build styles";
buildViews.description = "Build views";
cleanAll.description = "Clean all";
cleanFavicons.description = "Clean favicons";
cleanIcons.description = "Clean icons";
cleanScripts.description = "Clean scripts";
cleanStyles.description = "Clean styles";
cleanViews.description = "Clean views";
defaultTask.description = "clean:all > build:all";
watchAll.description = "Watch all";
watchFavicons.description = "Watch favicons";
watchIcons.description = "Watch icons";
watchScripts.description = "Watch styles";
watchStyles.description = "Watch styles";
watchViews.description = "Watch views";

/*
 * Export the tasks for consumption by gulpfile
 */

export {
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
};