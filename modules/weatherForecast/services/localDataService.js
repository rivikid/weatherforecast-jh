// getting cities and countries JSONs
export async function getLocalData(citiesUrl, countriesUrl) {
  try {
    const responseCities = await fetch(citiesUrl);
    const cities = await responseCities.json();
    const responseCountries = await fetch(countriesUrl);
    const countries = await responseCountries.json();
    return { cities, countries };
  } catch (error) {
    console.log("Local data is not loaded.", error);
  }
}
