import { displayCurrentWeather } from "./currentWeather";
import { displayDailyForecast } from "./dailyForecast";
import { displayThreeHourRange } from "./threeHourRange";
import { displayFavoriteCities } from "./displayFavoriteCities";
import { saveFavoriteCity } from "./saveFavoriteCity";
import { searchCityName } from "./searchInput";

function main() {
  displayCurrentWeather();
  displayDailyForecast();
  displayThreeHourRange();
  saveFavoriteCity();
  displayFavoriteCities();
  searchCityName();
}

main();
