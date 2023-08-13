import { displayCurrentWeather } from "./currentWeather";
import { displayDailyForecast } from "./dailyForecast";
import { getCurrentCityName } from "./getCurrentCityName";
import { displayThreeHourRange } from "./threeHourRange";
import { displayCityName } from "./cityName";
import { getDailyThreeHoursForecast } from "./getDailyThreeHoursForecast";
import { getCurrentWeather } from "./getCurrentWeather";
import { setFavoriteButtonColor } from "./setFavoriteButtonColor";

export const displayAllWeatherInfo = async (lat, lng) => {
  const updatedCityName = await getCurrentCityName(lat, lng);
  displayCityName(updatedCityName);

  const currentWeather = await getCurrentWeather(lat, lng);
  displayCurrentWeather(currentWeather);

  const data = await getDailyThreeHoursForecast(lat, lng);
  displayDailyForecast(data);

  displayThreeHourRange(data);

  setFavoriteButtonColor(lat, lng);
};
