import { displayCurrentWeather } from "./currentWeather";
import { displayDailyForecast } from "./dailyForecast";
import { displayThreeHourRange } from "./threeHourRange";

export const displayAllWeatherInfo = (lat, lng) => {
  displayCurrentWeather(lat, lng);
  displayDailyForecast(lat, lng);
  displayThreeHourRange(lat, lng);
};
