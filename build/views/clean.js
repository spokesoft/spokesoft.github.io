import { deleteAsync } from "del"
import { config } from "./config.js"
import { info } from "fancy-log"
import { join } from "path"

export async function cleanViews() {
  await deleteAsync(join(config.dest, '/**/*.html'))
  info(`Cleaned ${join(config.dest, '/**/*.html')}`)
}
