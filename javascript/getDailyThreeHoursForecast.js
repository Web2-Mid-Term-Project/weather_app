export const getDailyThreeHoursForecast = async (lat, lng) => {
  console.log('lat', lat);
  console.log('lng', lng);
  // TODO Fix later to using param data
  const latDummy = '49.2710362';
  const lonDummy = '-122.9808259';

  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latDummy}&lon=${lonDummy}&appid=WEATHER_API_KEY&units=metric`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return data
  } catch (error) {
    console.error('Error occurred', error);
  }
};
