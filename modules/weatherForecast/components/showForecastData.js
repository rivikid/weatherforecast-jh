import ForecastTable from "./block-forecastTable.js";
import { countriesEndpoint } from "../config.js";
import { clearElements, getElements } from "../services/elementsService.js";
import { getCountriesData } from "../services/countriesService.js";
import { countryCodeToName } from "../utils/countryCodeToName.js";
import { unixToDate } from "../utils/unixToDate.js";
import { formatDate } from "../utils/formatDate.js";
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
    forecastContentEl,
  } = getElements(moduleEl);

  if (!handleError(data, textEl, searchEl)) {
    forecastContentEl.innerHTML = ForecastTable();

    const forecast = data.list;
    const { name: cityName, country: countryCode } = data.city;
    getCountriesData(countriesEndpoint).then((countries) => {
      const countryName = countryCodeToName(countries, countryCode);
      countryEl.innerHTML = countryName;
    });

    textEl.innerHTML = `Dnes: ${unixToDate(forecast[0].dt)}`;
    cityEl.innerHTML = cityName;
    countryEl.innerHTML = countryCode;
    temperatureEl.innerHTML = `${formatTemperature(forecast[0].main.temp)}`;
    changeTemplate(forecast[0].main.temp, weatherEl);

    if (forecast.length !== 0) {
      const filteredDays = onlyDifferentDays(forecast);

      const rows = forecastContentEl.querySelector(
        ".weather__forecast-content-rows"
      );
      rows.innerHTML = filteredDays
        .map((day) => {
          return `<tr>
                    <td>${unixToDate(day.dt)}</td>
                    <td>${formatTemperature(day.main.temp)}</td>
                  </tr>`;
        })
        .join("");
    }
  }
}

// filtering forecast data to only different days (because may contain hourly data for same day)
function onlyDifferentDays(days) {
  let lastDay = formatDate(Date.now());
  return days.filter((day) => {
    const result = day.dt_txt.split(" ")[0] > lastDay;
    lastDay = day.dt_txt.split(" ")[0];
    return result;
  });
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
  return !(dataCod === 200);
};
