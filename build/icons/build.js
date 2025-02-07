import { config } from "./config.js"
import { info } from "fancy-log"
import { join } from "path"
import { mkdir, readdir, copyFile } from "fs/promises"

export async function buildIcons() {
  await mkdir(config.dest, { recursive: true })
  const files = await readdir(config.src)
  
  await Promise.all(
    files.map(file => 
      copyFile(join(config.src, file), join(config.dest, file))
    )
  )

  info(`Copied ${config.src}`)
}
