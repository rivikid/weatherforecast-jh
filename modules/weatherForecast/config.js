/* api */
const forecastKey = "9d2251d6f2137df7d065b8d90d6b972f";
const ipGeoEndpoint = `http://ip-api.com/json/?fields=status,message,lat,lon`;
const forecastEndpoint = `https://api.openweathermap.org/data/2.5/forecast?appid=${forecastKey}`;
const citiesEndpoint = "modules/weatherForecast/json/city.list.json";
const countriesEndpoint = "modules/weatherForecast/json/countries.json";

export { ipGeoEndpoint, forecastEndpoint, citiesEndpoint, countriesEndpoint };
