// getting countries data
export async function getCountriesData(countriesUrl) {
  try {
    const response = await fetch(countriesUrl);
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.log("Countries is not loaded.", error);
  }
}
