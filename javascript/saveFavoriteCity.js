import { displayFavoriteCities } from "./displayFavoriteCities";
import { onPlaceChanged } from "./searchInput";

export const saveFavoriteCity = () => {
  const favoriteButton = document.querySelector(".favorite-btn");

  favoriteButton.addEventListener("click", function () {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const selectedCityData = onPlaceChanged();
    const index = favorites.findIndex(
      (city) => city.name === selectedCityData.name
    );

    if (index === -1) {
      favorites.push(selectedCityData);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      favoriteButton.classList.add("favorited");
    } else {
      favorites.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      favoriteButton.classList.remove("favorited");
    }

    displayFavoriteCities(selectedCityData);
  });
};
