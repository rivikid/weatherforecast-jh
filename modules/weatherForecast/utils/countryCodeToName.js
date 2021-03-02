// format country code to name of that country
export function countryCodeToName(countries, countryCode) {
  if (countryCode) {
    return countries.filter((country) => {
      return country.code === countryCode;
    })[0].name;
  } else return "";
}
