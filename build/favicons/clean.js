import { deleteAsync } from "del"
import { config } from "./config.js"
import { info } from "fancy-log"

export async function cleanFavicons() {
  await deleteAsync(config.dest)
  info(`Cleaned ${config.dest}`)
  await deleteAsync(config.partial)
  info(`Cleaned ${config.partial}`)
}
