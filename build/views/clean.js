import { deleteAsync } from "del";

export default function cleanViews () {
    return new Promise((resolve, reject) => {
        return deleteAsync('www/**/*.html').then(resolve).catch(reject);
    });
}