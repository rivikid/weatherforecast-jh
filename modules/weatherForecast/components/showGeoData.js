import Loader from "../components/loader.js";
import { forecastEndpoint, ipGeoEndpoint } from "../config.js";
import { getElements } from "../services/elementsService.js";
import { getIpLocation } from "../services/ipGeoService.js";
import { getForecastData } from "../services/forecastDataService.js";
import { showForecastData } from "./showForecastData.js";

export function showGeoData(moduleEl) {
  const { loaderEl } = getElements(moduleEl);
  loaderEl.innerHTML = Loader();

  // initialization Geo Location
  navigator.geolocation.getCurrentPosition(
    (position) => {
      loaderEl.innerHTML = "";
      showPosition(position);
    },
    function (error) {
      if (error.code === error.PERMISSION_DENIED) {
        console.log("Geolocation is blocked.", error);
      }

      // getting location by IP adress
      getIpLocation(ipGeoEndpoint).then((ipGeoData) => {
        loaderEl.innerHTML = "";
        if (ipGeoData.status && ipGeoData.status === "success") {
          const { lat: latitude, lon: longitude } = ipGeoData;
          console.log("Location is approximate by using your IP location.");
          getForecastByCoordinates(latitude, longitude, moduleEl);
        } else {
          console.log("Failed to receiveIP location.", ipGeoData);
        }
      });
    }
  );

  function showPosition(position) {
    const { latitude, longitude } = position.coords;
    getForecastByCoordinates(latitude, longitude, moduleEl);
  }
}

function getForecastByCoordinates(lat, lon, moduleEl) {
  //call API for forecast data by: location coordinates (latitude, longitude)
  const forecastUrl = `${forecastEndpoint}&units=metric&lat=${lat}&lon=${lon}&exclude=minutely,hourly`;
  getForecastData(forecastUrl).then((forecastData) => {
    showForecastData(forecastData, moduleEl);
  });
}
