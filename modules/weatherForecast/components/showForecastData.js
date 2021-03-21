import ForecastTable from "./block-forecastTable.js";
import { countriesEndpoint } from "../config.js";
import { clearElements, getElements } from "../services/elementsService.js";
import { getCountriesData } from "../services/countriesService.js";
import { countryCodeToName } from "../utils/countryCodeToName.js";
import { unixToDate } from "../utils/unixToDate.js";
import { onlyDifferentDays } from "../utils/onlyDifferentDays.js";
import { formatTemperature } from "../utils/formatTemperature.js";
import { changeTemplate } from "../utils/changeTemplate.js";

export function showForecastData(data, moduleEl) {
  // clear elements that displaying previous forecast data
  clearElements(moduleEl);

  //getting elements for display forecast values
  const {
    weatherEl,
    searchEl,
    textEl,
    cityEl,
    countryEl,
    temperatureEl,
    forecastEl,
  } = getElements(moduleEl);

  handleError(data, textEl, searchEl);

  if (data.cod === "200") {
    // adding table mnarkup for future inserted rows with 5 day forecast
    forecastEl.innerHTML = ForecastTable();
    const forecast = data.list;
    const { name: cityName, country: countryCode } = data.city;
    getCountriesData(countriesEndpoint).then((countries) => {
      const countryName = countryCodeToName(countries, countryCode);
      countryEl.innerHTML = countryName;
    });
    const temperature = forecast[0].main.temp;

    textEl.innerHTML = `Dnes: ${unixToDate(forecast[0].dt)}`;
    cityEl.innerHTML = cityName;
    countryEl.innerHTML = countryCode;
    temperatureEl.innerHTML = `${formatTemperature(temperature)}`;

    if (forecast.length !== 0) {
      const rows = forecastEl.querySelector(".js-weather__forecast__rows");
      const filteredDays = onlyDifferentDays(forecast);
      rows.innerHTML = filteredDays
        .map((day) => {
          return `<tr>
        <td>${unixToDate(day.dt)}</td>
        <td>${formatTemperature(day.main.temp)}</td>
        </tr>`;
        })
        .join("");
    }

    // changing UI colors by temperature
    changeTemplate(temperature, weatherEl);
  }
}

const handleError = (data, textEl, searchEl) => {
  const cityName = searchEl.getAttribute("data-value");
  const dataCod = parseInt(data.cod);
  if (dataCod >= 400 && dataCod < 499) {
    textEl.innerHTML = `Pro toto místo \"${cityName}\" není předpověď.`;
    console.log(data.message);
  }
  if (dataCod >= 500 && dataCod < 599) {
    textEl.innerHTML = `Nastala neočekáváná chyba.`;
    console.log(data.message);
  }
};
