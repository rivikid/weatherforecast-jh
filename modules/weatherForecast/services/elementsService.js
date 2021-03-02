// elements selecetors that is using in entire app,
// need to be in sync with css styles and html structure

const weather = ".weather";
const status = ".weather__status";
const currentContent = ".weather__current-content";
const text = `${currentContent}__text`;
const city = `${currentContent}__city`;
const country = `${currentContent}__country`;
const temperature = `${currentContent}__temperature`;
const forecastContent = ".weather__forecast-content";

export function clearElements(moduleElement) {
  moduleElement.querySelector(status).innerHTML = "";
  moduleElement.querySelector(text).innerHTML = "";
  moduleElement.querySelector(city).innerHTML = "";
  moduleElement.querySelector(country).innerHTML = "";
  moduleElement.querySelector(temperature).innerHTML = "";
  moduleElement.querySelector(forecastContent).innerHTML = "";
}

export function getElements(moduleEl) {
  const weatherEl = moduleEl.querySelector(weather);
  const statusEl = moduleEl.querySelector(status);
  const textEl = moduleEl.querySelector(text);
  const cityEl = moduleEl.querySelector(city);
  const countryEl = moduleEl.querySelector(country);
  const temperatureEl = moduleEl.querySelector(temperature);
  const forecastContentEl = moduleEl.querySelector(forecastContent);
  return {
    weatherEl,
    textEl,
    forecastContentEl,
    statusEl,
    cityEl,
    countryEl,
    temperatureEl,
  };
}
