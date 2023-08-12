import { displayCurrentWeather } from './currentWeather';
import { searchCityName } from './searchInput';
import { displayDailyForecast } from './dailyForecast';
import { displayThreeHourRange } from './threeHourRange';
import { getDailyThreeHoursForecast } from './getDailyThreeHoursForecast';

async function main() {
  displayCurrentWeather();
  searchCityName();
  const data = await getDailyThreeHoursForecast();
  displayDailyForecast(data);
  displayThreeHourRange(data);
}

main();
