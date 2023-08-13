import { displayCurrentWeather } from "./currentWeather";
import { displayDailyForecast } from "./dailyForecast";
import { displayThreeHourRange } from "./threeHourRange";
import { displayCityName } from "./cityName";
import { API } from "./api";
import { setFavoriteButtonColor } from "./setFavoriteButtonColor";
import { setBackgroundImage } from "./setBackgroundImage";

export const displayAllWeatherInfo = async (lat, lng) => {
  const updatedCityName = await API.getCurrentCityName(lat, lng);
  displayCityName(updatedCityName);

  const currentWeather = await API.getCurrentWeather(lat, lng);
  displayCurrentWeather(currentWeather);

  const data = await API.getDailyThreeHoursForecast(lat, lng);
  for (let i = 0; i < 5; i++) {
    const day = document.getElementById(`${i}`);
    day.addEventListener("click", () => {
      displayThreeHourRange(data, i);
    });
  }
  displayDailyForecast(data);

  displayThreeHourRange(data);

  setFavoriteButtonColor(lat, lng);

  setBackgroundImage(currentWeather);
};
