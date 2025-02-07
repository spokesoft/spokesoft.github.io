import { favicons } from "favicons"
import { writeFile, mkdir } from "fs/promises"
import { config } from "./config.js"
import { info } from "fancy-log"
import { join, dirname } from "path"

export async function buildFavicons() {
  const response = await favicons(config.src, {
    path: '/favicons',
    appName: 'Spokesoft',
    icons: {
      android: true,
      appleIcon: true,
      favicons: true,
      windows: true
    }
  })

  await mkdir(config.dest, { recursive: true })
  await mkdir(dirname(config.partial), { recursive: true })

  await Promise.all(
    response.images.map(image => {
      writeFile(join(config.dest, image.name), image.contents)
      info(`Wrote image ${join(config.dest, image.name)}`)
    })
  )

  await Promise.all(
    response.files.map(file => {
      writeFile(join(config.dest, file.name), file.contents)
      info(`Wrote image ${join(config.dest, file.name)}`)
    })
  )

  await writeFile(config.partial, response.html.join('\n'))
}

function htmlToPug(html) {
  return html
    .replace(/<(link|meta)([^>]+)\/>/g, (_, tag, attrs) => {
      const attributes = attrs
        .trim()
        .split(/\s+/)
        .map(attr => {
          const [key, value] = attr.split('=');
          return value ? `${key}=${value}` : key;
        })
        .join(', ');
      
      return `${tag}(${attributes})`;
    });
 }