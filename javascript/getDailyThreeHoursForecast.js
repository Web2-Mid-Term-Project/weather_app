import { displayDailyForecast } from './dailyForecast';
import { displayThreeHourRange } from './threeHourRange';

export const getDailyThreeHoursForecast = async () => {
  // TODO Fix later to using param data
  const lat = '49.2710362';
  const lon = '-122.9808259';

  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=WEATHER_API_KEY&units=metric`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    displayDailyForecast(data);
    displayThreeHourRange(data);
  } catch (error) {
    console.error('Error occurred', error);
  }
};
