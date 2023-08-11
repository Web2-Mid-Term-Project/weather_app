export const displayThreeHourRange = (data) => {
  const formattedArray = [];
  const dailyHoursData = data.list.slice(0, 8);

  dailyHoursData.forEach((obj) => {
    formattedArray.push({
      temp: {
        min: Math.round(obj.main.temp_min.toFixed(2)),
        max: Math.round(obj.main.temp_max.toFixed(2)),
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
