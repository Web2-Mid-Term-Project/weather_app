import { onPlaceChanged } from "./searchInput";
import { displayFavoriteCities } from "./displayFavoriteCities";
import { API } from "./api";

export const saveFavoriteCity = (lat, lng, currentCityName) => {
  const favoriteButton = document.querySelector(".favorite-btn");
  const fav = document.getElementById("fav");

  favoriteButton.addEventListener("click", async function () {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const selectedCityDataFromInput = onPlaceChanged();
    let selectedCityData;

    if (selectedCityDataFromInput) {
      selectedCityData = selectedCityDataFromInput;
    } else {
      const dropdown = document.getElementById("favorite-city-dropdown");
      const selectedCityName = dropdown.value;

      selectedCityData = favorites.find(
        (city) => city.name === selectedCityName
      );

      if (!selectedCityData) {
        try {
          const { cityName, data } = await API.getCurrentCityName(lat, lng);
          selectedCityData = {
            name: currentCityName,
            geometry: {
              location: {
                lat: lat,
                lng: lng,
              },
            },
          };
        } catch (error) {
          console.error("Error getting city data", error);
        }
      }
    }

    if (selectedCityData) {
      const index = favorites.findIndex(
        (city) => city.name === selectedCityData.name
      );

      if (index === -1) {
        favorites.push(selectedCityData);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        fav.style.fill = "#e9a14f";
      } else {
        favorites.splice(index, 1);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        fav.style.fill = "#fdfdfd";
      }

      displayFavoriteCities();
    }
  });
};
