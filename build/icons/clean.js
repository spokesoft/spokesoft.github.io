import { deleteAsync } from "del";

export default function cleanIcons() {
  return new Promise((resolve, reject) => {
    deleteAsync("www/icons").then(resolve).catch(reject);
  });
}
