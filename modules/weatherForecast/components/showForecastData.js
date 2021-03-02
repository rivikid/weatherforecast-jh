import ForecastTable from "./block-forecastTable.js";
import { clearElements, getElements } from "../services/elementsService.js";
import { countryCodeToName } from "../utils/countryCodeToName.js";
import { unixToDate } from "../utils/unixToDate.js";
import { formatDate } from "../utils/formatDate.js";
import { formatTemperature } from "../utils/formatTemperature.js";
import { changeTemplate } from "../utils/changeTemplate.js";

export function showForecastData(data, cities, countries, moduleEl) {
  // clear elements that displaying previous forecast data
  clearElements(moduleEl);

  //getting elements for display forecast values
  const {
    weatherEl,
    statusEl,
    textEl,
    cityEl,
    countryEl,
    temperatureEl,
    forecastContentEl,
  } = getElements(moduleEl);

  textEl.innerHTML = handleError(data);

  forecastContentEl.innerHTML = ForecastTable();

  const forecast = data.list;
  const { name: cityName, country: countryCode } = data.city;
  const countryName = countryCodeToName(countries, countryCode);

  statusEl.innerHTML = "";
  textEl.innerHTML = `Dnes: ${unixToDate(forecast[0].dt)}`;
  cityEl.innerHTML = cityName;
  countryEl.innerHTML = countryName;
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
                    <td>
                      ${unixToDate(day.dt)}
                    </td>
                    <td>${formatTemperature(day.main.temp)}</td>
                  </tr>`;
      })
      .join("");
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

const handleError = (data) => {
  const dataCod = parseInt(data.cod);
  let message = "";
  if (dataCod >= 400 && dataCod < 499) {
    message = `This city has not found in database.`;
  }
  if (dataCod >= 500 && dataCod < 599) {
    message = `An unexpected error occured.`;
  }
  return message;
};
