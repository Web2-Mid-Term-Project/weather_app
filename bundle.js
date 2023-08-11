(function () {
  'use strict';

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

  const displayDailyForecast = (data) => {
    const dividedArray = [];
    const formattedArray = [];

    /**
     * Making 5 dividedArray, each has 8 array (3hours forecast)
     */
    if (data) {
      for (let i = 0; i < data.list.length; i += 8) {
        const dailyArray = data.list.slice(i, i + 8);
        dividedArray.push(dailyArray);
      }
    }

    /**
     *
     * @param {*} day - number(1-5)
     * @param {*} type - string(temp_max | temp_min)
     * @returns averageTemp - ex.27
     */
    const averageTemp = (day, type) => {
      const sum = dividedArray[day - 1].reduce(
        (acc, cur) => acc + cur.main[type],
        0
      );
      return Math.round((sum / dividedArray[day - 1].length).toFixed(2));
    };

    /**
     *
     * @param {*} day - number(1-5)
     * @returns Array of weatherCondition for one day
     */
    const weatherCondition = (day) => {
      const conditions = [];
      dividedArray[day - 1].forEach((hoursWeather) => {
        const condition = hoursWeather.weather[0].main;
        if (!conditions.includes(condition)) {
          conditions.push(condition);
        }
      });
      return conditions;
    };

    /**
     * Making 5 formattedArray to display
     */
    for (let i = 0; i < dividedArray.length; i++) {
      formattedArray.push({
        temp: {
          min: averageTemp(i + 1, 'temp_min'),
          max: averageTemp(i + 1, 'temp_max'),
        },
        condition: weatherCondition(i + 1),
        dt_txt: dividedArray[i][0].dt_txt,
      });
    }

    formattedArray.forEach((weather, i) => {
      const highTempElem = document.getElementById(`high-temp-day${i + 1}`);
      highTempElem.textContent = weather.temp.max;
      const lowTempElem = document.getElementById(`low-temp-day${i + 1}`);
      lowTempElem.textContent = weather.temp.min;

      const dateObj = new Date(weather.dt_txt);

      // day
      const day = dateObj.toLocaleString('en-US', { weekday: 'short' });
      const dayElem = document.getElementById(`daily-day${i + 1}`);
      dayElem.textContent = day;

      // month
      const month = dateObj.toLocaleString('en-US', { month: 'short' });
      const monthElem = document.getElementById(`daily-month${i + 1}`);
      monthElem.textContent = month;

      // date
      const date = dateObj.getDate();
      const dateElem = document.getElementById(`daily-date${i + 1}`);
      dateElem.textContent = date;

      const conditionElem = document.getElementById(
        `weather-condition-day${i + 1}`
      );
      conditionElem.textContent = weather.condition.join(' | ');
    });
  };

  const displayThreeHourRange = (data) => {
    const formattedArray = [];
    const dailyHoursData = data.list.slice(0, 8);

    dailyHoursData.forEach((obj) => {
      formattedArray.push({
        temp: {
          min: obj.main.temp_min,
          max: obj.main.temp_max,
        },
        condition: obj.weather.map((condition) => condition.main),
        dt_txt: obj.dt_txt,
      });
    });

    formattedArray.forEach((weather, i) => {
      const highTempElem = document.getElementById(`high-temp-${i * 3}`);
      highTempElem.textContent = weather.temp.max;
      const lowTempElem = document.getElementById(`low-temp-${i * 3}`);
      lowTempElem.textContent = weather.temp.min;

      const conditionElem = document.getElementById(`weather-condition-${i * 3}`);
      conditionElem.textContent = weather.condition.join(' | ');
    });
  };

  const getDailyThreeHoursForecast = async () => {
    // TODO Fix later to using param data
    const lat = '49.2710362';
    const lon = '-122.9808259';

    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=5b68ac118b2ff547eea32a8d4e1d0f9e&units=metric`;

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      displayDailyForecast(data);
      displayThreeHourRange(data);
    } catch (error) {
      console.error('Error occurred', error);
    }
  };

  const displayCityName = (city) => {
    const cityNameElements = document.getElementsByClassName("city-name");
    const element = cityNameElements[0];
    element.textContent = city;
  };

  const CITY_NAME = 'Vancouver';

  const displayAllWeatherInfo = (city = CITY_NAME) => {
    displayCityName(city);
    displayCurrentWeather();
    getDailyThreeHoursForecast();
  };

  async function getUserLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      displayAllWeatherInfo();
    }
  }

  function success(position) {
    const userLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    const geocoder = new google.maps.Geocoder();
    let defaultCity;

    geocoder
      .geocode({ location: userLocation })
      .then((res) => {
        if (res.results[0]) {
          const addressComponents = res.results[0].address_components;
          const cityComponent = addressComponents.find((component) =>
            component.types.includes("locality")
          );
          defaultCity = cityComponent ? cityComponent.long_name : CITY_NAME;
        } else {
          defaultCity = CITY_NAME;
        }
      })
      .catch((e) => {
        defaultCity = CITY_NAME;
      });
    displayAllWeatherInfo(defaultCity);
  }

  function error() {
    displayAllWeatherInfo();
  }

  let autocomplete;

  function searchCityName() {
    let script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC97Mp24ssj31LXUwJ_Y3zgvi0SQhkuq48&libraries=places&callback=initAutocomplete";
    script.async = true;

    window.initAutocomplete = function () {
      autocomplete = new google.maps.places.Autocomplete(
        document.getElementById("search-input"),
        {
          types: ["(cities)"],
        }
      );
      autocomplete.addListener("place_changed", onPlaceChanged);
    };
    document.head.appendChild(script);
  }

  function onPlaceChanged() {
    const place = autocomplete.getPlace();

    if (!place.geometry) {
      document.getElementById("search-input").placeholder = "Search Cities";
    } else {
      displayAllWeatherInfo(place.name);
    }
  }

  function main() {
    displayCurrentWeather();
    getUserLocation();
    searchCityName();
    getDailyThreeHoursForecast();
  }

  main();

})();
