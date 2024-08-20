import { info } from "fancy-log";
import { mkdir, writeFile } from "fs/promises";
import { compileAsync } from "sass";
import ensureDirectory from "../ensure-directory.js";

export default function buildStyles() {
  return new Promise((resolve, reject) => {
    info("Building styles...");

    compileAsync("src/styles/spokesoft.scss", { loadPaths: ["node_modules"] })
      .then((result) => {
        ensureDirectory("www/css", { recursive: true, force: true })
          .then(() => {
            writeFile("www/css/spokesoft.css", result.css)
              .then(() => info(`Wrote file www/css/spokesoft.css`))
              .then(resolve)
              .catch(reject);
          })
          .catch(reject);
      })
      .catch(reject);
  });
}
