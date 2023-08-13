import { displayFavoriteCities } from "./displayFavoriteCities";

export const saveFavoriteCity = () => {
  const favoriteButton = document.querySelector(".favorite-btn");
  const fav = document.getElementById("fav");

  favoriteButton.addEventListener("click", function () {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const selectedCityData = onPlaceChanged();
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
