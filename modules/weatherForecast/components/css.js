import { cssPath } from "../config.js";
// inserting link of Weather Forecast module styles into HTML Head element
export function insertCssToHtml() {
  const head = document.querySelector("head");
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = cssPath;
  head.appendChild(link);
}
