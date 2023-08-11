import { displayCurrentWeather } from "./currentWeather";
import { displayDailyForecast } from "./dailyForecast";
import { displayThreeHourRange } from "./threeHourRange";
import { searchCityName } from "./searchInput";

function main() {
  displayCurrentWeather();
  displayDailyForecast();
  displayThreeHourRange();
  searchCityName();
}

main();
