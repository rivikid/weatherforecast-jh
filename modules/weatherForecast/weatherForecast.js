import ModuleStructure from "./components/moduleStructure.js";

export function WeatherForecast(moduleEl) {
  // inserting structure of the Weather forecast module
  moduleEl.innerHTML = ModuleStructure();

  console.log("Weather Forecast loaded.");
}
