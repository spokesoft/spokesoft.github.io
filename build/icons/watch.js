import log from "fancy-log";

export default function watchIcons() {
  return new Promise((resolve, reject) => {
    log.info("Watching icons...");
    resolve();
  });
}
