export const saveFavoriteCity = () => {
  const favoriteButton = document.querySelector(".favorite-btn");

  favoriteButton.addEventListener("click", function () {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const selectedCityName = "Vancouver"; // Should be replaced with the actual city name based on the city name fetched from API
    const index = favorites.indexOf(selectedCityName);

    if (index === -1) {
      favorites.push(selectedCityName);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      favoriteButton.classList.add("favorited");
    } else {
      favorites.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      favoriteButton.classList.remove("favorited");
    }

    displayFavoriteCities();
  });
};
