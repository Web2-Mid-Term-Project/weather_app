import { displayCityName } from "./cityName";
import { displayCurrentWeather } from "./currentWeather";
import { displayDailyForecast } from "./dailyForecast";
import { displayThreeHourRange } from "./threeHourRange";
import { displayFavoriteCities } from "./displayFavoriteCities";
import { saveFavoriteCity } from "./saveFavoriteCity";

function main() {
  displayCityName();
  displayCurrentWeather();
  displayDailyForecast();
  displayThreeHourRange();
  saveFavoriteCity();
  displayFavoriteCities();
}

main();
