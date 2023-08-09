import { displayCityName } from "./cityName";
import { displayCurrentWeather } from "./currentWeather";
import { displayDailyForecast } from "./dailyForecast";
import { displayThreeHourRange } from "./threeHourRange";

export const CITY_NAME = "Vancouver";

export const displayAllWeatherInfo = (city = CITY_NAME) => {
  displayCityName(city);
  displayCurrentWeather(city);
  displayDailyForecast(city);
  displayThreeHourRange(city);
};
