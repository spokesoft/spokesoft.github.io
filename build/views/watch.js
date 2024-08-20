import log from "fancy-log";

export default function watchViews() {
  return new Promise((resolve, reject) => {
    log.info("Watching views...");
    resolve();
  });
}
