import { displayCityName } from "./cityName";
import { displayCurrentWeather } from "./currentWeather";
import { displayDailyForecast } from "./dailyForecast";
import { getCurrentCityName } from "./getCurrentCityName";
import { getCurrentWeather } from "./getCurrentWeather";
import { getDailyThreeHoursForecast } from "./getDailyThreeHoursForecast";
import { searchCityName } from "./searchInput";
import { displayThreeHourRange } from "./threeHourRange";
import { getUserLocation } from "./userLocation";

async function main() {
  for (let i = 0; i < 5; i++) {
    const day = document.getElementById(`${i}`);
    day.addEventListener("click", () => {
      displayThreeHourRange(data, i);
    });
  }
  const currentLocation = await getUserLocation();
  const currentCityName = await getCurrentCityName(
    currentLocation.lat,
    currentLocation.lng
  );
  displayCityName(currentCityName);
  const currentWeather = await getCurrentWeather(
    currentLocation.lat,
    currentLocation.lng
  );
  displayCurrentWeather(currentWeather);
  const dailyThreeHoursForecast = await getDailyThreeHoursForecast(
    currentLocation.lat,
    currentLocation.lng
  );
  displayDailyForecast(dailyThreeHoursForecast);
  displayThreeHourRange(dailyThreeHoursForecast);
  searchCityName();
}

main();
