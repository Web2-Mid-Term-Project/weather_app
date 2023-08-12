const GOOGLE_API_URL = "https://maps.googleapis.com/maps/api/geocode/json";
const OPEN_WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";

export const API = {
  getCurrentCityName: async (lat, lng) => {
    const apiUrl = `${GOOGLE_API_URL}?latlng=${lat},${lng}&key=GOOGLE_PLACES_API_KEY`;

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
  },
  getCurrentWeather: async (lat, lng) => {
    const apiUrl = `${OPEN_WEATHER_API_URL}/weather?lat=${lat}&lon=${lng}&appid=WEATHER_API_KEY&units=metric`;

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error("Error occurred", error);
    }
  },
  getDailyThreeHoursForecast: async (lat, lng) => {
    const apiUrl = `${OPEN_WEATHER_API_URL}/forecast?lat=${lat}&lon=${lng}&appid=WEATHER_API_KEY&units=metric`;

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error("Error occurred", error);
    }
  },
};
