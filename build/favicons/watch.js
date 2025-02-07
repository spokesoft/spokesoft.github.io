import log from "fancy-log";

export async function watchFavicons() {
  return new Promise((resolve, reject) => {
    log.info("Watching favicons...");
    resolve();
  });
}
