export const displayThreeHourRange = () => {
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
