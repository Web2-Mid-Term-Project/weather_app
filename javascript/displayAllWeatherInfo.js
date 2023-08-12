import { displayCurrentWeather } from './currentWeather';
import { displayDailyForecast } from './dailyForecast';
import { displayThreeHourRange } from './threeHourRange';
import { getDailyThreeHoursForecast } from './getDailyThreeHoursForecast';

export const displayAllWeatherInfo = async (lat, lng) => {
  displayCurrentWeather(lat, lng);
  const data = await getDailyThreeHoursForecast(lat, lng);
  displayDailyForecast(data);
  displayThreeHourRange(data);
};
