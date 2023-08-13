export const getCurrentCityName = async (lat, lng) => {
  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=GOOGLE_PLACES_API_KEY`;

  try {
    let cityName = "";
    const res = await fetch(apiUrl);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    data.results.forEach((result, i) => {
      if (result.types.includes("locality")) {
        cityName = result.address_components[0].long_name;
      }
    });

    return cityName;
  } catch (error) {
    console.error("Error occurred", error);
  }
};
