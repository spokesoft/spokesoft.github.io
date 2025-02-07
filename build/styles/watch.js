import log from "fancy-log";

export async function watchStyles() {
  return new Promise((resolve, reject) => {
    log.info("Watching styles...");
    resolve();
  });
}
