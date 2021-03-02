// changing template color by current temperature
const classNameWarm = "weather--warm";
const classNameNeutral = "weather--neutral";
const classNameCold = "weather--cold";

export function changeTemplate(temperature, weatherEl) {
  if (temperature < 0) {
    weatherEl.classList.remove(classNameWarm);
    weatherEl.classList.remove(classNameNeutral);
    weatherEl.classList.add(classNameCold);
  } else if (temperature >= 0 && temperature < 15) {
    weatherEl.classList.remove(classNameWarm);
    weatherEl.classList.add(classNameNeutral);
    weatherEl.classList.remove(classNameCold);
  } else if (temperature >= 15) {
    weatherEl.classList.add(classNameWarm);
    weatherEl.classList.remove(classNameNeutral);
    weatherEl.classList.remove(classNameCold);
  }
}
