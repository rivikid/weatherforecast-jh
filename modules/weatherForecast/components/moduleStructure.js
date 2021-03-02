import Header from "./block-header.js";
import Search from "./block-search.js";
import Current from "./block-current.js";
import Forecast from "./block-forecast.js";

const ModuleStructure = () => {
  return `<div class="weather weather--warm">
  ${Header()}
  ${Search()}
  ${Current()}
  ${Forecast()}
  </div>`;
};

export default ModuleStructure;
