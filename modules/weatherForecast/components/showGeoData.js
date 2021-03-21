import Loader from "../components/loader.js";
import { forecastEndpoint, ipGeoEndpoint } from "../config.js";
import { getElements } from "../services/elementsService.js";
import { getIpLocation } from "../services/ipGeoService.js";
import { getForecastData } from "../services/forecastDataService.js";
import { showForecastData } from "./showForecastData.js";

export function showGeoData(moduleEl) {
  const { loaderEl, textEl } = getElements(moduleEl);

  // checking if browser supported Geo Location
  if (!navigator.geolocation) {
    console.log("Geolocation is not supported by your browser.");
  } else {
    loaderEl.innerHTML = Loader();
    // getting current position by Geo Location API (time limit set to 10 seconds)
    navigator.geolocation.getCurrentPosition(showPosition, error, {
      timeout: 10000,
    });
  }

  function showPosition(position) {
    const { latitude, longitude } = position.coords;
    getForecastByCoordinates(latitude, longitude, moduleEl);
  }

  // if Geo Location is blocked, or exceeded the allowed time limit, or another error occured
  function error(err) {
    // if user blocked geolocation in browser
    if (err.code === err.PERMISSION_DENIED) {
      loaderEl.innerHTML = "";
      textEl.innerHTML =
        "Geolokace je ve vašem prohlížeči blokována. PROSÍM POUŽIJTE VYHLEDÁVACÍ POLE.";
      console.log("Geolocation is blocked by your browser.", err);
    } else {
      // getting approximate position by the users IP adress and obtain
      // position from IP Location API service
      getIpLocation(ipGeoEndpoint).then((ipGeoData) => {
        if (ipGeoData.status && ipGeoData.status === "success") {
          const { lat: latitude, lon: longitude } = ipGeoData;
          console.log("Location is approximate by using your IP location.");
          getForecastByCoordinates(latitude, longitude, moduleEl);
        } else {
          console.log("Failed to receive IP location.", ipGeoData);
          textEl.innerHTML =
            "Nepodařilo se určit vaši polohu. PROSÍM POUŽIJTE VYHLEDÁVACÍ POLE.";
        }
      });
    }
  }
}

function getForecastByCoordinates(lat, lon, moduleEl) {
  //call API for forecast data by: location coordinates (latitude, longitude)
  const forecastUrl = `${forecastEndpoint}&units=metric&lat=${lat}&lon=${lon}&exclude=minutely,hourly`;
  getForecastData(forecastUrl).then((forecastData) => {
    showForecastData(forecastData, moduleEl);
  });
}
