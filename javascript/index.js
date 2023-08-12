import { displayCityName } from "./cityName";
import { displayCurrentWeather } from "./currentWeather";
import { displayDailyForecast } from "./dailyForecast";
import { getCurrentCityName } from "./getCurrentCityName";
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
