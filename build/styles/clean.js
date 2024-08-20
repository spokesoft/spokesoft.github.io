import { deleteAsync } from "del";

export default function cleanStyles() {
  return new Promise((resolve, reject) => {
    deleteAsync("www/css").then(resolve).catch(reject);
  });
}
