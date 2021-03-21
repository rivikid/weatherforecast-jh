import { formatDate } from "./formatDate.js";

// filtering forecast data to only different days (because may contain hourly data for same day)
export function onlyDifferentDays(days) {
  let lastDay = formatDate(Date.now());
  return days.filter((day) => {
    const result = day.dt_txt.split(" ")[0] > lastDay;
    lastDay = day.dt_txt.split(" ")[0];
    return result;
  });
}
