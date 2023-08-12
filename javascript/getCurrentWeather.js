export const getCurrentWeather = async (lat, lng) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=WEATHER_API_KEY&units=metric`;

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
};
