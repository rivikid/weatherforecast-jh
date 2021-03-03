import ModuleStructure from "./components/moduleStructure.js";
import { showGeoData } from "./components/showGeoData.js";
import { searchData } from "./components/searchData.js";

export function WeatherForecast(moduleEl) {
  // inserting structure of the Weather forecast module
  moduleEl.innerHTML = ModuleStructure();

  // show forecast data using Geolocation
  showGeoData(moduleEl);

  // searching forecast by searchbar
  searchData(moduleEl);
}
