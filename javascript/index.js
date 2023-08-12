import { displayCityName } from "./cityName";
import { displayCurrentWeather } from "./currentWeather";
import { displayDailyForecast } from "./dailyForecast";
import { getCurrentCityName } from "./getCurrentCityName";
import { getDailyThreeHoursForecast } from "./getDailyThreeHoursForecast";
import { searchCityName } from "./searchInput";
import { displayThreeHourRange } from "./threeHourRange";
import { getUserLocation } from "./userLocation";
import { saveFavoriteCity } from "./saveFavoriteCity";
import { displayFavoriteCities } from "./displayFavoriteCities";

async function main() {
  const currentLocation = await getUserLocation();
  const currentCityName = await getCurrentCityName(
    currentLocation.lat,
    currentLocation.lng
  );
  displayCityName(currentCityName);
  const data = await getDailyThreeHoursForecast(
    currentLocation.lat,
    currentLocation.lng
  );
  // TODO Change argument like daily and threeHourRange
  displayCurrentWeather();
  displayDailyForecast(data);
  displayThreeHourRange(data);
  searchCityName();
  saveFavoriteCity();
  displayFavoriteCities();
}

main();
