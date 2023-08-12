import { displayCurrentWeather } from './currentWeather';
import { displayDailyForecast } from './dailyForecast';
import { getCurrentCityName } from './getCurrentCityName';
import { displayThreeHourRange } from './threeHourRange';
import { displayCityName } from './cityName';
import { getDailyThreeHoursForecast } from './getDailyThreeHoursForecast';

export const displayAllWeatherInfo = async (lat, lng, city) => {
  const updatedCityName = await getCurrentCityName(lat, lng);
  displayCityName(updatedCityName);
  const data = await getDailyThreeHoursForecast(lat, lng);
  // TODO Change argument like daily and threeHourRange
  displayCurrentWeather(lat, lng);
  displayDailyForecast(data);
  displayThreeHourRange(data);
};
