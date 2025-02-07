import { deleteAsync } from "del"
import { config } from "./config.js"
import { info } from "fancy-log"

export async function cleanScripts() {
  await deleteAsync(config.intermediate)
  info(`Cleaned ${config.intermediate}`)
  await deleteAsync(config.dist)
  info(`Cleaned ${config.dist}`)
}
