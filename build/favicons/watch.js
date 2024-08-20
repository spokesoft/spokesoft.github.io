import log from "fancy-log";

export default function watchFavicons() {
    return new Promise((resolve, reject) => {
        log.info("Watching favicons...");
        resolve();
    });
}