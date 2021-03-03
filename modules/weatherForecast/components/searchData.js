import { citiesEndpoint, forecastEndpoint } from "../config.js";
import { getCitiesData } from "../services/citiesService.js";
import { getForecastData } from "../services/forecastDataService.js";
import { autocomplete } from "../utils/autocomplete.js";
import { showForecastData } from "./showForecastData.js";
import { filterInputText } from "../utils/filterInputText.js";

export function searchData(moduleEl) {
  let cities = [];
  const searchEl = moduleEl.querySelector(".weather__search");
  const autocompleteEl = moduleEl.querySelector(".autocomplete");

  getCitiesData(citiesEndpoint).then((data) => {
    cities = data;
  });

  document.addEventListener(
    "click",
    () => {
      autocompleteEl.classList.add("hidden");
    },
    false
  );
  searchEl.addEventListener(
    "click",
    (ev) => {
      // click on searchbar stopped adding hidden class to autocomplete
      ev.stopPropagation();
    },
    false
  );

  searchEl.addEventListener(
    "keypress",
    (ev) => {
      if (ev.key === "Enter") {
        // code for enter
        handleSelect(ev, searchEl, autocompleteEl, moduleEl);
      }
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
  // injection prevent
  ev.currentTarget.setAttribute(
    "data-value",
    filterInputText(ev.currentTarget.value)
  );
  ev.currentTarget.value = ev.currentTarget.getAttribute("data-value");
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
  autocompleteEl.classList.add("hidden");

  // call API for forecast data by: city name
  const forecastUrl = `${forecastEndpoint}&units=metric&q=${chosenCity}`;
  if (chosenCity) {
    getForecastData(forecastUrl).then((forecastData) => {
      showForecastData(forecastData, moduleEl);
    });
  }
};
