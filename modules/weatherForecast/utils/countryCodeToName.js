// format country code to name of that country
export function countryCodeToName(countries, countryCode) {
  // sometimes country code missing (ex location Antartica), in this case return original value
  if (countries.length && countryCode) {
    return countries.filter((country) => {
      return country.code === countryCode;
    })[0].name;
  } else return countryCode;
}
