import { deleteAsync } from "del";

export default function cleanScripts() {
  return new Promise((resolve, reject) => {
    deleteAsync("www/js").then(resolve).catch(reject);
  });
}
