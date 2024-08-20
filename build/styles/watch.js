import log from "fancy-log";

export default function watchStyles() {
  return new Promise((resolve, reject) => {
    log.info("Watching styles...");
    resolve();
  });
}
