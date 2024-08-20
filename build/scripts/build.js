import log from "fancy-log";

export default function buildScripts () {
    return new Promise((resolve, reject) => {
        log.info("Building scripts...");
        resolve();
    });
}