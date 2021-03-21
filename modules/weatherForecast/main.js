import { WeatherForecast } from "./weatherForecast.js";
import { insertCssToHtml } from "./components/css.js";

export function loadWeatherForecast() {
  // start initialization of Weather Forecast module immediately after DOM is loaded
  return document.addEventListener("DOMContentLoaded", initWeatherForecast());
}

function initWeatherForecast() {
  // inserting css styles for module to HTML Head
  insertCssToHtml();

  // initialize each WeatherForecast module
  const weatherForecastsElements = document.querySelectorAll(
    "[role=weather-forecast]"
  );

  // initialize module for each Weather Forescast element
  weatherForecastsElements.forEach((element) => new WeatherForecast(element));
}
