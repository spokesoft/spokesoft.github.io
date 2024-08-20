import log from "fancy-log";

export default function watchScripts() {
    return new Promise((resolve, reject) => {
        log.info("Watching scripts...");
        resolve();
    });
}