import { mkdir, readdir, writeFile } from "fs/promises"
import { compileAsync } from "sass"
import { config } from "./config.js"
import { join, dirname } from "path"
import { info, error } from "fancy-log"

export async function buildStyles() {
  await buildAppStyles()
  await buildPageStyles()
}

export async function buildAppStyles() {
  try {
    const src = join(config.src, config.app.src)
    const dest = join(config.dist, 'spokesoft.min.css')
    info(src)
    info(dest)
    await mkdir(config.dist, { recursive: true })
    await compileSass(src, dest)
  } catch(err) {
    error('from buildAppStyles')
    error(err)
  }
}

export async function buildPageStyles() {
  try {
    const pageFiles = await readdir(join(config.src, 'pages'), { recursive: true })
    const sassFiles = pageFiles.filter(file => file.endsWith('.scss'))
    await mkdir(join(config.dist, 'pages'), { recursive: true })
    for (const file of sassFiles) {
      const src = join(config.src, 'pages', file)
      const dest = join(config.dist, 'pages', file.replace('.scss', '.min.css'))
      await mkdir(dirname(dest), { recursive: true })
      await compileSass(src, dest)
    }
  } catch(err) {
    error('from buildPageStyles')
    error(err)
  }
}

async function compileSass(src, dest) {
  const result = await compileAsync(src, {
    style: 'compressed',
    sourceMap: true,
    loadPaths: [config.src, 'node_modules']
  });

  await writeFile(dest, result.css)
  info(`Wrote file ${dest}`)
  if (result.sourceMap) {
    await writeFile(`${dest}.map`, JSON.stringify(result.sourceMap))
    info(`Wrote file ${dest}.map`)
  }
}