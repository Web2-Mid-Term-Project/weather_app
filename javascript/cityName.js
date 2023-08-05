const CITY_NAME = "Vancouver";

export const displayCityName = () => {
  const cityNameElements = document.getElementsByClassName("city-name");
  const element = cityNameElements[0];
  element.textContent = CITY_NAME;
};
