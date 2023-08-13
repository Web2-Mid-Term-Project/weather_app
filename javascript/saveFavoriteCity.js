import { onPlaceChanged } from "./searchInput";
import { displayFavoriteCities } from "./displayFavoriteCities";

export const saveFavoriteCity = (lat, lng, currentCityName) => {
  const favoriteButton = document.querySelector(".favorite-btn");
  const fav = document.getElementById("fav");

  favoriteButton.addEventListener("click", async function () {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const selectedCityData = getSelectedCityData(favorites, {
      lat,
      lng,
      currentCityName,
    });

    if (!selectedCityData) return;

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
  });
};

const getSelectedCityData = (favorites, cityData = {}) => {
  const { lat, lng, currentCityName } = cityData;
  const selectedCityDataFromInput = onPlaceChanged();

  if (selectedCityDataFromInput) return selectedCityDataFromInput;

  const dropdown = document.getElementById("favorite-city-dropdown");
  const selectedCityName = dropdown.value;

  const selectedCityData = favorites.find(
    (city) => city.name === selectedCityName
  );

  const currentCityData = {
    name: currentCityName,
    geometry: {
      location: {
        lat: lat,
        lng: lng,
      },
    },
  };

  return selectedCityData || currentCityData;
};
