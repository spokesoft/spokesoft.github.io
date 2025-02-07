import { mkdir, readdir } from "fs/promises"
import { createWriteStream } from "fs"
import { config } from "./config.js"
import { join, dirname } from "path"
import { info, error } from "fancy-log"
import { exec } from "child_process"
import { promisify } from "util"
import browserify from "browserify"

const execAsync = promisify(exec)

export async function buildScripts() {
  await buildAppScripts();
  await buildPageScripts();
}

export async function buildAppScripts() {
  try {
    const src = join(config.intermediate, config.app.src)
    const dest = join(config.dist, 'app.min.js')
    await mkdir(config.dist, { recursive: true })
    await compileTypeScript()
    await bundleScript(src, dest)
  } catch(err) {
    error(err)
  }
}

export async function buildPageScripts() {
  try {
    const pageFiles = await readdir(join(config.intermediate, 'pages'), { recursive: true })
    const tsFiles = pageFiles.filter(file => file.endsWith('.js'))
    await mkdir(join(config.dist, 'pages'), { recursive: true })
    for (const file of tsFiles) {
      const src = join(config.intermediate, 'pages', file)
      const dest = join(config.dist, 'pages', file.replace('.js', '.min.js'))
      await mkdir(dirname(dest), { recursive: true })
      await compileTypeScript()
      await bundleScript(src, dest)
    }
  } catch(err) {
    error(err)
  }
}

async function compileTypeScript() {
  try {
    const { stdout, stderr } = await execAsync('npx tsc');
    if (stdout) info(stdout);
    if (stderr) error(stderr);
  } catch (err) {
    error(err)
  }
}

async function bundleScript(src, dest) {
  return new Promise((resolve, reject) => {
    browserify(src)
      .bundle()
      .pipe(createWriteStream(dest))
      .on('finish', resolve)
      .on('error', reject);
  })
}