import { displayCurrentWeather } from "./currentWeather";
import { displayDailyForecast } from "./dailyForecast";
import { displayThreeHourRange } from "./threeHourRange";
import { getUserLocation } from "./userLocation";
import { searchCityName } from "./searchInput";

function main() {
  displayCurrentWeather();
  displayDailyForecast();
  displayThreeHourRange();
  getUserLocation();
  searchCityName();
}

main();
