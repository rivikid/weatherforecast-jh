/* Configuration for services */
const path = "modules/weatherForecast/";
const cssPath = `${path}css/styles.min.css`;
const citiesEndpoint = `${path}json/city.list.json`;
const countriesEndpoint = `${path}json/countries.json`;
const forecastKey = "9d2251d6f2137df7d065b8d90d6b972f";
const forecastEndpoint = `https://api.openweathermap.org/data/2.5/forecast?appid=${forecastKey}`;
const ipGeoEndpoint = `https://extreme-ip-lookup.com/json/`;

export {
  cssPath,
  citiesEndpoint,
  countriesEndpoint,
  forecastEndpoint,
  ipGeoEndpoint,
};
