import { displayAllWeatherInfo } from "./displayAllWeatherInfo";

export const displayFavoriteCities = () => {
  let favorites = JSON.parse(localStorage.getItem("favorites"));
  const dropdown = document.getElementById("favorite-city-dropdown");

  let optionsHTML = `<select id="favorite-city-dropdown" class="favorite-city-dropdown">
  <option value="">-- Favorite Cities --</option>`;

  favorites?.forEach((city) => {
    optionsHTML += `<option value="${city.name}">${city.name}</option>`;
  });

  optionsHTML += `</select>`;

  dropdown.innerHTML = optionsHTML;

  dropdown.addEventListener("change", function () {
    const selectedCityName = dropdown.value;
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const selectedCityData = favorites.find(
      (city) => city.name === selectedCityName
    );

    if (selectedCityData) {
      displayAllWeatherInfo(
        selectedCityData.geometry.location.lat,
        selectedCityData.geometry.location.lng
      );
    }
  });
};
