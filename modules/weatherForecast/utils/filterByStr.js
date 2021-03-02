import { removeDiacritics } from "./removeDiacritics.js";

// filtering property of data which is defined by path, if includes searching string
export function filterByStr(data, str, path) {
  return data.filter((d) => {
    return removeDiacritics(d[path])
      .toLowerCase()
      .includes(removeDiacritics(str).toLowerCase());
  });
}
