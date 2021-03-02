import { ipGeoEndpoint } from "../config.js";
import { getIpLocation } from "../services/ipGeoService.js";

export function showGeoData(localData, moduleEl) {
  // initialization Geo Location
  if (!navigator.geolocation) {
    return console.log("Geolokace není podporována ve vašem prohlížeči.");
  } else {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(
          "Browser geolokace:",
          position.coords.latitude,
          position.coords.longitude
        );
      },

      function (error) {
        if (error.code === error.PERMISSION_DENIED) {
          console.log(
            "Geolokace je v prohlížeči blokována, prosím použijte vyhledávací pole"
          );
        }

        // getting location by IP adress
        getIpLocation(ipGeoEndpoint).then((ipGeoData) => {
          console.log("IP geolokace:", ipGeoData.lat, ipGeoData.lon);
        });
      }
    );
  }
}
