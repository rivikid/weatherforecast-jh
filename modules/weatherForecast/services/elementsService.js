// elements selecetors that is using in entire app,
// need to be in sync with css styles and html structure

const weather = ".weather";
const loader = `${weather}__loader`;
const status = `${weather}__status`;
const search = `${weather}__searchbar`;
const text = `${weather}__message`;
const city = `${weather}__city`;
const country = `${weather}__country`;
const temperature = `${weather}__temperature`;
const forecast = `${weather}__forecast`;

export function clearElements(moduleEl) {
  moduleEl.querySelector(loader).innerHTML = "";
  moduleEl.querySelector(status).innerHTML = "";
  moduleEl.querySelector(search).value = "";
  moduleEl.querySelector(text).innerHTML = "";
  moduleEl.querySelector(city).innerHTML = "";
  moduleEl.querySelector(country).innerHTML = "";
  moduleEl.querySelector(temperature).innerHTML = "";
  moduleEl.querySelector(forecast).innerHTML = "";
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
  const forecastEl = moduleEl.querySelector(forecast);
  return {
    weatherEl,
    loaderEl,
    statusEl,
    searchEl,
    textEl,
    cityEl,
    countryEl,
    temperatureEl,
    forecastEl,
  };
}
