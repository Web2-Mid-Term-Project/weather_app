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

  const displayDailyForecast = async () => {
    const lat = '49.2710362';
    const lon = '-122.9808259';

    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=5b68ac118b2ff547eea32a8d4e1d0f9e&units=metric`;

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      console.log('data', data);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const dividedArray = [];

      for (let i = 0; i < data.list.length; i += 8) {
        const dailyArray = data.list.slice(i, i + 8);
        dividedArray.push(dailyArray);
      }

      console.log('dividedArray', dividedArray);

      // const dummyResponse = {
      //   list: [
      //     {
      //       main: { temp_min: 290.31, temp_max: 292.46 },
      //       weather: [{ main: 'Rain' }],
      //       dt_txt: '2022-08-05 15:00:00',
      //     },
      //     {
      //       main: { temp_min: 290.31, temp_max: 292.46 },
      //       weather: [{ main: 'Rain' }],
      //       dt_txt: '2022-08-06 15:00:00',
      //     },
      //     {
      //       main: { temp_min: 290.31, temp_max: 292.46 },
      //       weather: [{ main: 'Rain' }],
      //       dt_txt: '2022-08-07 15:00:00',
      //     },
      //     {
      //       main: { temp_min: 290.31, temp_max: 292.46 },
      //       weather: [{ main: 'Rain' }],
      //       dt_txt: '2022-08-08 15:00:00',
      //     },
      //     {
      //       main: { temp_min: 290.31, temp_max: 292.46 },
      //       weather: [{ main: 'Rain' }],
      //       dt_txt: '2022-08-09 15:00:00',
      //     },
      //   ],
      // };

      data.list.forEach((weather, i) => {
        const highTempElem = document.getElementById(`high-temp-day${i + 1}`);
        highTempElem.textContent = weather.main.temp_max;
        const lowTempElem = document.getElementById(`low-temp-day${i + 1}`);
        lowTempElem.textContent = weather.main.temp_min;

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
        conditionElem.textContent = weather.weather[0].main;
      });
    } catch (error) {
      console.error('Error occurred', error);
    }
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

  const displayCityName = (city) => {
    const cityNameElements = document.getElementsByClassName("city-name");
    const element = cityNameElements[0];
    element.textContent = city;
  };

  const CITY_NAME = "Vancouver";

  const displayAllWeatherInfo = (city = CITY_NAME) => {
    displayCityName(city);
    displayCurrentWeather();
    displayDailyForecast();
    displayThreeHourRange();
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
      "https://maps.googleapis.com/maps/api/js?key=IzaSyC97Mp24ssj31LXUwJ_Y3zgvi0SQhkuq48&libraries=places&callback=initAutocomplete";
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
    displayDailyForecast();
    displayThreeHourRange();
    getUserLocation();
    searchCityName();
  }

  main();

})();
