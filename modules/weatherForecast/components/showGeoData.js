import { forecastEndpoint, ipGeoEndpoint } from "../config.js";
import { getIpLocation } from "../services/ipGeoService.js";
import { getForecastData } from "../services/forecastDataService.js";
import { getElements } from "../services/elementsService.js";
import { showForecastData } from "./showForecastData.js";
import { searchData } from "./searchData.js";

export function showGeoData(localData, moduleEl) {
  // searching forecast by searchbar
  searchData(localData, moduleEl);

  // initialization Geo Location
  const { statusEl } = getElements(moduleEl);

  if (!navigator.geolocation) {
    return (statusEl.innerHTML =
      "Geolokace není podporována ve vašem prohlížeči.");
  } else {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        showPosition(position);
      },

      function (error) {
        if (error.code === error.PERMISSION_DENIED) {
          console.log("Geolocation is blocked.");
        }

        // getting location by IP adress
        getIpLocation(ipGeoEndpoint).then((ipGeoData) => {
          console.log("Location is approximate by using your IP location.");
          getForecastByCoordinates(
            ipGeoData.lat,
            ipGeoData.lon,
            localData,
            moduleEl
          );
        });
      }
    );
  }

  function showPosition(position) {
    //call API for forecast data by: location coordinates (latitude, longitude)
    getForecastByCoordinates(
      position.coords.latitude,
      position.coords.longitude,
      localData,
      moduleEl
    );
  }
}

function getForecastByCoordinates(lat, lon, localData, moduleEl) {
  const forecastUrl = `${forecastEndpoint}&units=metric&lat=${lat}&lon=${lon}&exclude=minutely,hourly`;
  getForecastData(forecastUrl).then((forecastData) => {
    showForecastData(
      forecastData,
      localData.cities,
      localData.countries,
      moduleEl
    );
  });
}
