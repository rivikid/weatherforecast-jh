// getting cities data
export async function getCitiesData(citiesUrl) {
  try {
    const response = await fetch(citiesUrl);
    const cities = await response.json();
    return cities;
  } catch (error) {
    console.log("Cities is not loaded.", error);
  }
}
