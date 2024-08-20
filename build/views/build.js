import { info } from "fancy-log";
import { compileFile } from "pug";
import { mkdir, writeFile } from "fs/promises";
import ensureDirectory from "../ensure-directory.js";

export default function buildViews() {
  return new Promise((resolve, reject) => {

    info("Building views...");

    var locals = {};
    
    const aboutPage = compileFile("src/views/about.pug");
    const contactPage = compileFile("src/views/contact.pug");
    const indexPage = compileFile("src/views/index.pug");
    const productsPage = compileFile("src/views/products.pug");
    const teamPage = compileFile("src/views/team.pug");

    ensureDirectory('www').then(() => {
      const promises = [];
      promises.push(writeFile('www/about.html', aboutPage(locals)));
      promises.push(writeFile('www/contact.html', contactPage(locals)));
      promises.push(writeFile('www/index.html', indexPage(locals)));
      promises.push(writeFile('www/products.html', productsPage(locals)));
      promises.push(writeFile('www/team.html', teamPage(locals)));
      Promise.all(promises).then(resolve).catch(reject);
    });

  });
}
