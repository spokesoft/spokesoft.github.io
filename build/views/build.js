import { compileFile } from "pug"
import { readdir, mkdir, writeFile } from "fs/promises"
import { config } from "./config.js"
import { join, parse, relative } from "path"
import { info } from "fancy-log"

export async function buildViews() {
  await mkdir(config.dest, { recursive: true })
  const files = await readViewFiles(config.src)

  const defaultLocals = {
    app: 'Spokesoft',
    version: '1.0.0'
  }

  await Promise.all(
    files.map(async file => {

      const relPath = relative(config.src, file)
      const { dir, name } = parse(relPath)
      const outputDir = join(config.dest, dir)
      await mkdir(outputDir, { recursive: true })
      
      const title = name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ')

      var locals = {
        ...defaultLocals,
        page: name,
        title: `Spokesoft · ${title}`
      }

      const html = compileFile(file)(locals);
      const filename = join(outputDir, `${name}.html`)
      await writeFile(filename, html)
      info(`Wrote file ${filename}`)
    })
  )
}

async function readViewFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async entry => {
      const res = join(dir, entry.name)
      if (entry.isDirectory()) {
        if (['includes', 'mixins'].includes(entry.name)) return []
        return readViewFiles(res);
      }
      return entry.name === 'layout.pug' ? [] : [res]
    })
  );
  return files.flat().filter(file => file.endsWith('.pug'))
}