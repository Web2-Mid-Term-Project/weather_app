import { displayAllWeatherInfo } from "./displayAllWeatherInfo";

export const displayFavoriteCities = (data) => {
  let favorites = JSON.parse(localStorage.getItem("favorites"));
  const dropdown = document.getElementById("favorite-city-dropdown");

  let optionsHTML = `<select id="favorite-city-dropdown" class="favorite-city-dropdown">
  <option value="">-- Favorite Cities --</option>`;

  favorites?.forEach((city) => {
    optionsHTML += `<option value="${city?.toLowerCase()}">${city}</option>`;
  });

  optionsHTML += `</select>`;

  dropdown.innerHTML = optionsHTML;

  console.log(data);

  dropdown.addEventListener("change", function () {
    const selectedCityName = dropdown.value;
    const selectedCity = data.city.find(
      (city) => city.name === selectedCityName
    );

    if (selectedCity) {
      const selectedCityLat = selectedCity.coord.lat;
      const selectedCityLng = selectedCity.coord.lon;
      displayAllWeatherInfo(selectedCityLat, selectedCityLng);
    }
  });
};
