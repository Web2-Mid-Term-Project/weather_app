import { displayCurrentWeather } from './currentWeather';
import { searchCityName } from './searchInput';
import { getDailyThreeHoursForecast } from './getDailyThreeHoursForecast';

function main() {
  displayCurrentWeather();
  searchCityName();
  getDailyThreeHoursForecast();
}

main();
