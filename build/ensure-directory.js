import { mkdir } from "fs/promises";

export default function ensureDirectory(dir, options) {
  return mkdir(dir, options).catch((err) => {
    if (err.code !== 'EEXIST') throw err;
  });
}