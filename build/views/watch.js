import log from "fancy-log";

export async function watchViews() {
  return new Promise((resolve, reject) => {
    log.info("Watching views...");
    resolve();
  });
}
