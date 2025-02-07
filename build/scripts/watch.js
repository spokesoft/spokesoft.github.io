import log from "fancy-log";

export async function watchScripts() {
  return new Promise((resolve, reject) => {
    log.info("Watching scripts...");
    resolve();
  });
}
