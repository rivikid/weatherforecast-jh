import { removeDiacritics } from "./removeDiacritics.js";

// return data that his property includes search string
// name of property of the object (source data) is defined by "path"
export function filterByStr(data, str, path) {
  return data.filter((d) => {
    return removeDiacritics(d[path])
      .toLowerCase()
      .includes(removeDiacritics(str).toLowerCase());
  });
}
