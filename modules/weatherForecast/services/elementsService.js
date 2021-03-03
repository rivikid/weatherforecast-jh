// elements selecetors that is using in entire app,
// need to be in sync with css styles and html structure

const weather = ".weather";
const loader = ".weather__loader";
const status = ".weather__status";
const search = ".weather__search";
const currentContent = ".weather__current-content";
const text = `${currentContent}__text`;
const city = `${currentContent}__city`;
const country = `${currentContent}__country`;
const temperature = `${currentContent}__temperature`;
const forecastContent = ".weather__forecast-content";

export function clearElements(moduleEl) {
  moduleEl.querySelector(loader).innerHTML = "";
  moduleEl.querySelector(status).innerHTML = "";
  moduleEl.querySelector(search).value = "";
  moduleEl.querySelector(text).innerHTML = "";
  moduleEl.querySelector(city).innerHTML = "";
  moduleEl.querySelector(country).innerHTML = "";
  moduleEl.querySelector(temperature).innerHTML = "";
  moduleEl.querySelector(forecastContent).innerHTML = "";
}

export function getElements(moduleEl) {
  const weatherEl = moduleEl.querySelector(weather);
  const loaderEl = moduleEl.querySelector(loader);
  const statusEl = moduleEl.querySelector(status);
  const searchEl = moduleEl.querySelector(search);
  const textEl = moduleEl.querySelector(text);
  const cityEl = moduleEl.querySelector(city);
  const countryEl = moduleEl.querySelector(country);
  const temperatureEl = moduleEl.querySelector(temperature);
  const forecastContentEl = moduleEl.querySelector(forecastContent);
  return {
    weatherEl,
    loaderEl,
    statusEl,
    searchEl,
    textEl,
    cityEl,
    countryEl,
    temperatureEl,
    forecastContentEl,
  };
}
