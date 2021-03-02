import ModuleStructure from "./components/moduleStructure.js";
import Loader from "./components/loader.js";
import { citiesEndpoint, countriesEndpoint } from "./config.js";
import { getLocalData } from "./services/localDataService.js";
import { showGeoData } from "./components/showGeoData.js";

export function WeatherForecast(moduleEl) {
  // inserting structure of the Weather forecast module
  moduleEl.innerHTML = ModuleStructure();

  // show loader until local data loaded
  const loaderElement = moduleEl.querySelector(".weather__loader");
  loaderElement.innerHTML = Loader();

  // fetching data from local JSONs
  getLocalData(citiesEndpoint, countriesEndpoint).then((localData) => {
    loaderElement.innerHTML = "";
    showGeoData(localData, moduleEl);
    console.log("Weather Forecast loaded.");
  });
}
