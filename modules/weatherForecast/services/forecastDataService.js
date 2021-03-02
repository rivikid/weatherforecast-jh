// Getting forecast data
export async function getForecastData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Forecast data is not loaded.", error);
  }
}
