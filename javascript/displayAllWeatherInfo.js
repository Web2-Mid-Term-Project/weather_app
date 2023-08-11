import { displayCityName } from './cityName';
import { displayCurrentWeather } from './currentWeather';
import { getDailyThreeHoursForecast } from './getDailyThreeHoursForecast';

export const CITY_NAME = 'Vancouver';

export const displayAllWeatherInfo = (city = CITY_NAME) => {
  displayCityName(city);
  displayCurrentWeather(city);
  getDailyThreeHoursForecast(city);
};
