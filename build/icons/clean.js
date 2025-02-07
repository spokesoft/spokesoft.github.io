import { deleteAsync } from "del"
import { config } from "./config.js"
import { info } from "fancy-log"

export async function cleanIcons() {
  await deleteAsync(config.dest)
  info(`Cleaned ${config.dest}`)
}
