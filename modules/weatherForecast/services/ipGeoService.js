// Getting location by user IP
export async function getIpLocation(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("IP location data is not loaded.", error);
  }
}
