export const displayDailyForecast = (data) => {
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
