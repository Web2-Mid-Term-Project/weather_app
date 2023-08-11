const DEFAULT_CITY_NAME = "Vancouver";

export const displayCityName = (city = DEFAULT_CITY_NAME) => {
  const cityNameElements = document.getElementsByClassName("city-name");
  const element = cityNameElements[0];
  element.textContent = city;
};
