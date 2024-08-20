import favicons from "favicons";
import { writeFile, mkdir } from "fs/promises";
import { info } from "fancy-log";
import { dirname } from "path";
import ensureDirectory from "../ensure-directory.js";

export default function buildFavicons() {
  return new Promise((resolve, reject) => {
    info("Building favicons ...");

    const sourceFile = "src/images/icon.png";

    const options = {
      path: "/favicons",
      appName: "Spokesoft",
    };

    favicons(sourceFile, options)
      .then((response) => {
        const promises = [];

        // Write the files to the favicons directory
        response.files.forEach((file) => {
          const filepath = "www/favicons/" + file.name;
          const parent = dirname(filepath);
          const logNewFile = () => info(`Wrote file ${filepath}`);
          const writeNewFile = () =>
            writeFile(filepath, file.contents).then(logNewFile);
          promises.push(
            mkdir(parent, { recursive: true, force: true }).then(writeNewFile)
          );
        });

        // Write the images to the favicons directory
        response.images.forEach((image) => {
          const filepath = "www/favicons/" + image.name;
          const parent = dirname(filepath);
          const logNewImage = () => info(`Wrote file ${filepath}`);
          const writeNewImage = () =>
            writeFile(filepath, image.contents).then(logNewImage);
          promises.push(
            ensureDirectory(parent, { recursive: true }).then(writeNewImage)
          );
        });

        // Write the html response to the source views directory
        promises.push(
          writeFile("src/views/favicons.html", response.html.join("\n")).then(
            () => info(`Wrote file src/views/favicons.html`)
          )
        );

        Promise.all(promises).then(resolve).catch(reject);
      })
      .catch(reject);
  });
}
