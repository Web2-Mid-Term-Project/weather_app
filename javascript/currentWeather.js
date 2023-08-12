export const displayCurrentWeather = (currentWeather) => {
  const currentTemperatureElem = document.getElementById("current-temperature");
  const currentWeatherConditionElem = document.getElementById(
    "current-weather-condition"
  );

  currentTemperatureElem.textContent = Math.floor(currentWeather.main.temp);
  currentWeatherConditionElem.textContent = currentWeather.weather[0].main;
};
