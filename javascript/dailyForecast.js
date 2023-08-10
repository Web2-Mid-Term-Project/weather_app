export const displayDailyForecast = async () => {
  const lat = '49.2710362';
  const lon = '-122.9808259';

  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=WEATHER_API_KEY&units=metric`;

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
