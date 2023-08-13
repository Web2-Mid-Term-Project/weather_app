export const setFavoriteButtonColor = (lat, lng) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const matchingCity = favorites.find(
    (city) =>
      city.geometry.location.lat === lat && city.geometry.location.lng === lng
  );

  const fav = document.getElementById("fav");

  if (matchingCity) {
    fav.style.fill = "#e9a14f";
  } else {
    fav.style.fill = "#fdfdfd";
  }
};
