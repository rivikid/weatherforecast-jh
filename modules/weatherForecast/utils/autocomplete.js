import { filterByStr } from "./filterByStr.js";

// autocomplete for Searchbar
export function autocomplete(
  data,
  str,
  searchEl,
  autocompleteEl,
  moduleEl,
  onSelect
) {
  // filtering data by the string text (for data object we need to define name of property)
  const filteredData = filterByStr(data, str, "name");

  autocompleteEl.innerHTML =
    str && filteredData.length > 0 ? rowsContent(filteredData) : "";

  autocompleteEl
    .querySelectorAll(".js-autocomplete__item")
    .forEach((rowElement) =>
      rowElement.addEventListener(
        "click",
        (ev) => onSelect(ev, searchEl, autocompleteEl, moduleEl),
        false
      )
    );
}

// create autocomplete rows (reduced to 25 rows)
const rowsContent = (filteredData) => {
  const maxRows = 25;
  let countRows = 0;

  return `<ul class="list-group">
  ${filteredData
    .map((d) => {
      countRows++;
      if (countRows < maxRows)
        return `<li class="list-group__item js-autocomplete__item" id="${d.id}" data-value="${d.name}">${d.name} / ${d.country}</li>`;
    })
    .join("")}
    </ul>`;
};
