import { deleteAsync } from "del"
import { config } from "./config.js"
import { info } from "fancy-log"

export async function cleanStyles() {
  await deleteAsync(config.dist)
  info(`Cleaned ${config.dist}`)
}
