export const displayCityName = (city) => {
  const cityNameElements = document.getElementsByClassName("city-name");
  const element = cityNameElements[0];
  element.textContent = city;
};
