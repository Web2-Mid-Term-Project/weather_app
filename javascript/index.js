import { API } from "./api";
import { displayCityName } from "./cityName";
import { displayCurrentWeather } from "./currentWeather";
import { displayDailyForecast } from "./dailyForecast";
import { searchCityName } from "./searchInput";
import { displayThreeHourRange } from "./threeHourRange";
import { getUserLocation } from "./userLocation";
import { saveFavoriteCity } from "./saveFavoriteCity";
import { displayFavoriteCities } from "./displayFavoriteCities";

async function main() {
  const { lat, lng } = await getUserLocation();
  const currentCityName = await API.getCurrentCityName(lat, lng);
  displayCityName(currentCityName);
  const currentWeather = await API.getCurrentWeather(lat, lng);
  displayCurrentWeather(currentWeather);
  const dailyThreeHoursForecast = await API.getDailyThreeHoursForecast(
    lat,
    lng
  );

  for (let i = 0; i < 5; i++) {
    const day = document.getElementById(`${i}`);
    day.addEventListener("click", () => {
      displayThreeHourRange(dailyThreeHoursForecast, i);
    });
  }
  displayDailyForecast(dailyThreeHoursForecast);
  displayThreeHourRange(dailyThreeHoursForecast);
  searchCityName();
  saveFavoriteCity(lat, lng, currentCityName);
  displayFavoriteCities();
}

main();
