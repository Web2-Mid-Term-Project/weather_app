(function () {
  'use strict';

  const CITY_NAME = "Vancouver";

  const displayCityName = () => {
    const cityNameElements = document.getElementsByClassName("city-name");
    const element = cityNameElements[0];
    element.textContent = CITY_NAME;
  };

  const displayCurrentWeather = () => {
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

  const displayDailyForecast = () => {
    // FIXME: replace with real API call
    // ref: https://openweathermap.org/forecast5
    const dummyResponse = {
      list: [
        {
          main: { temp_min: 290.31, temp_max: 292.46 },
          weather: [{ main: "Rain" }],
          dt_txt: "2022-08-05 15:00:00",
        },
        {
          main: { temp_min: 290.31, temp_max: 292.46 },
          weather: [{ main: "Rain" }],
          dt_txt: "2022-08-06 15:00:00",
        },
        {
          main: { temp_min: 290.31, temp_max: 292.46 },
          weather: [{ main: "Rain" }],
          dt_txt: "2022-08-07 15:00:00",
        },
        {
          main: { temp_min: 290.31, temp_max: 292.46 },
          weather: [{ main: "Rain" }],
          dt_txt: "2022-08-08 15:00:00",
        },
        {
          main: { temp_min: 290.31, temp_max: 292.46 },
          weather: [{ main: "Rain" }],
          dt_txt: "2022-08-09 15:00:00",
        },
      ],
    };

    dummyResponse.list.forEach((weather, i) => {
      const highTempElem = document.getElementById(`high-temp-day${i + 1}`);
      highTempElem.textContent = weather.main.temp_max;
      const lowTempElem = document.getElementById(`low-temp-day${i + 1}`);
      lowTempElem.textContent = weather.main.temp_min;

      const dateObj = new Date(weather.dt_txt);

      // day
      const day = dateObj.toLocaleString("en-US", { weekday: "short" });
      const dayElem = document.getElementById(`daily-day${i + 1}`);
      dayElem.textContent = day;

      // month
      const month = dateObj.toLocaleString("en-US", { month: "short" });
      const monthElem = document.getElementById(`daily-month${i + 1}`);
      monthElem.textContent = month;

      // date
      const date = dateObj.getDate();
      const dateElem = document.getElementById(`daily-date${i + 1}`);
      dateElem.textContent = date;

      const conditionElem = document.getElementById(
        `weather-condition-day${i + 1}`
      );
      conditionElem.textContent = weather.weather[0].main;
    });
  };

  const displayThreeHourRange = () => {
    // FIXME: replace with real API call
    // ref: https://openweathermap.org/forecast5
    const dummyResponse = {
      list: [
        {
          main: { temp_min: 290.31, temp_max: 292.46 },
          weather: [{ main: "Rain" }],
          dt_txt: "2022-08-05 00:00:00",
        },
        {
          main: { temp_min: 290.31, temp_max: 292.46 },
          weather: [{ main: "Rain" }],
          dt_txt: "2022-08-05 03:00:00",
        },
        {
          main: { temp_min: 290.31, temp_max: 292.46 },
          weather: [{ main: "Rain" }],
          dt_txt: "2022-08-05 06:00:00",
        },
        {
          main: { temp_min: 290.31, temp_max: 292.46 },
          weather: [{ main: "Rain" }],
          dt_txt: "2022-08-05 09:00:00",
        },
        {
          main: { temp_min: 290.31, temp_max: 292.46 },
          weather: [{ main: "Rain" }],
          dt_txt: "2022-08-05 12:00:00",
        },
        {
          main: { temp_min: 290.31, temp_max: 292.46 },
          weather: [{ main: "Rain" }],
          dt_txt: "2022-08-05 15:00:00",
        },
        {
          main: { temp_min: 290.31, temp_max: 292.46 },
          weather: [{ main: "Rain" }],
          dt_txt: "2022-08-05 18:00:00",
        },
        {
          main: { temp_min: 290.31, temp_max: 292.46 },
          weather: [{ main: "Rain" }],
          dt_txt: "2022-08-05 21:00:00",
        },
      ],
    };

    dummyResponse.list.forEach((weather, i) => {
      const highTempElem = document.getElementById(`high-temp-${i * 3}`);
      highTempElem.textContent = weather.main.temp_max;
      const lowTempElem = document.getElementById(`low-temp-${i * 3}`);
      lowTempElem.textContent = weather.main.temp_min;

      const conditionElem = document.getElementById(`weather-condition-${i * 3}`);
      conditionElem.textContent = weather.weather[0].main;
    });
  };

  const displayFavoriteCities = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    const dropdown = document.getElementById("favorite-city-dropdown");

    let optionsHTML = `<select id="favorite-city-dropdown" class="favorite-city-dropdown">
  <option value="">-- Favorite Cities --</option>`;

    favorites?.forEach((city) => {
      optionsHTML += `<option value="${city?.toLowerCase()}">${city}</option>`;
    });

    optionsHTML += `</select>`;

    dropdown.innerHTML = optionsHTML;
  };

  const saveFavoriteCity = () => {
    const favoriteButton = document.querySelector(".favorite-btn");

    favoriteButton.addEventListener("click", function () {
      let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

      const selectedCityName = "Vancouver"; // Should be replaced with the actual city name based on the city name fetched from API
      const index = favorites.indexOf(selectedCityName);

      if (index === -1) {
        favorites.push(selectedCityName);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        favoriteButton.classList.add("favorited");
      } else {
        favorites.splice(index, 1);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        favoriteButton.classList.remove("favorited");
      }

      displayFavoriteCities();
    });
  };

  function main() {
    displayCityName();
    displayCurrentWeather();
    displayDailyForecast();
    displayThreeHourRange();
    saveFavoriteCity();
    displayFavoriteCities();
  }

  main();

})();
