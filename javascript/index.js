import { displayCurrentWeather } from './currentWeather';
import { getDailyThreeHoursForecast } from './getDailyThreeHoursForecast';
import { getUserLocation } from './userLocation';
import { searchCityName } from './searchInput';

function main() {
  displayCurrentWeather();
  getUserLocation();
  searchCityName();
  getDailyThreeHoursForecast();
}

main();
