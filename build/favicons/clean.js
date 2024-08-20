import { deleteAsync } from "del";

export default function cleanFavicons () {
    return new Promise((resolve, reject) => {
        deleteAsync('www/favicons').then(resolve).catch(reject);
    });
}