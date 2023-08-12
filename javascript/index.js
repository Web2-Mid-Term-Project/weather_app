import { displayCurrentWeather } from './currentWeather';
import { searchCityName } from './searchInput';
import { displayDailyForecast } from './dailyForecast';
import { displayThreeHourRange } from './threeHourRange';
import { getDailyThreeHoursForecast } from './getDailyThreeHoursForecast';
import { getUserLocation } from './userLocation';

async function main() {
  const currentLocation = await getUserLocation();
  const data = await getDailyThreeHoursForecast(
    currentLocation.lat,
    currentLocation.lng
  );
  // TODO Change argument like daily and threeHourRange
  displayCurrentWeather();
  displayDailyForecast(data);
  displayThreeHourRange(data);
  searchCityName();
}

main();
