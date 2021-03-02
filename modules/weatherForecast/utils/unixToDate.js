// use user browser language
const userLang = navigator.language || navigator.userLanguage;
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

// tranform unix date format to locale date string
export function unixToDate(dateUnix) {
  const event = new Date(dateUnix * 1000);
  return event.toLocaleDateString(userLang, options);
}
