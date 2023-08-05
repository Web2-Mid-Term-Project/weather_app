export const displayCurrentWeather = () => {
  const currentTemperatureElem = document.getElementById("current-temperature");
  const currentWeatherConditionElem = document.getElementById(
    "current-weather-condition"
  );

  // FIXME: replace with real API call
  // ref: https://openweathermap.org/current
  const dummyResponse = {
    weather: [{ main: "Rain" }],
    main: { temp: 298.48 },
  };

  currentTemperatureElem.textContent = dummyResponse.main.temp;
  currentWeatherConditionElem.textContent = dummyResponse.weather[0].main;
};
