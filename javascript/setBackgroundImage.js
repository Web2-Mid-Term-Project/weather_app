export const setBackgroundImage = (currentWeather) => {
  const { timezone } = currentWeather;
  const now = new Date();
  const localTime = new Date(now.getTime() + timezone * 1000);
  const currentHour = localTime.getUTCHours();

  const sunriseHour = 6;
  const sunsetHour = 18;
  const isDay = currentHour >= sunriseHour && currentHour <= sunsetHour;

  const currentContainer = document.querySelector(".current-container");
  currentContainer.classList.toggle("current-container--day", isDay);
  currentContainer.classList.toggle("current-container--night", !isDay);
};
