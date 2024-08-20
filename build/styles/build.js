import log from "fancy-log";

export default function buildStyles () {
    return new Promise((resolve, reject) => {
        log.info("Building styles...");
        resolve();
    });
}