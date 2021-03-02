import { forecastEndpoint } from "../config.js";
import { getForecastData } from "../services/forecastDataService.js";
import { autocomplete } from "../utils/autocomplete.js";
import { showForecastData } from "./showForecastData.js";

let cities = [];
let countries = [];

export function searchData(data, moduleEl) {
  const searchEl = moduleEl.querySelector(".weather__search");
  const autocompleteEl = moduleEl.querySelector(".autocomplete");
  cities = data.cities;
  countries = data.countries;

  document.addEventListener(
    "click",
    () => {
      autocompleteEl.classList.add("hidden");
    },
    false
  );
  searchEl.addEventListener(
    "click",
    (e) => {
      // click on searchbar stopped adding hidden class to autocomplete
      e.stopPropagation();
    },
    false
  );

  ["input", "focus"].forEach((event) =>
    searchEl.addEventListener(
      event,
      (ev) =>
        handleSearchChange(ev, cities, searchEl, autocompleteEl, moduleEl),
      false
    )
  );
}

// if start typing to search input, autocomplete rows are visible
const handleSearchChange = (ev, cities, searchEl, autocompleteEl, moduleEl) => {
  ev.currentTarget.setAttribute("data-value", ev.currentTarget.value);
  const cityName = ev.currentTarget.getAttribute("data-value");
  if (cityName) {
    autocompleteEl.classList.remove("hidden");
    autocomplete(
      cities,
      cityName,
      searchEl,
      autocompleteEl,
      moduleEl,
      handleSelect
    );
  } else {
    autocompleteEl.classList.add("hidden");
  }
};

// if we select city, autocomplete rows are hidden and show forecast rows
const handleSelect = (ev, searchEl, autocompleteEl, moduleEl) => {
  // save city name and clear search bar
  const chosenCity = ev.currentTarget.getAttribute("data-value");
  searchEl.setAttribute("data-value", "");
  searchEl.value = "";
  autocompleteEl.classList.add("hidden");

  // call API for forecast data by: city name
  const forecastUrl = `${forecastEndpoint}&units=metric&q=${chosenCity}`;
  if (chosenCity) {
    getForecastData(forecastUrl).then((forecastData) => {
      showForecastData(forecastData, cities, countries, moduleEl);
    });
  }
};
