export const displayFavoriteCities = () => {
  let favorites = JSON.parse(localStorage.getItem("favorites"));
  const dropdown = document.getElementById("favorite-city-dropdown");

  let optionsHTML = `<select id="favorite-city-dropdown" class="favorite-city-dropdown">
  <option value="">-- Favorite Cities --</option>`;

  favorites?.forEach((city) => {
    optionsHTML += `<option value="${city?.toLowerCase()}">${city}</option>`;
  });

  optionsHTML += `</select>`;

  dropdown.innerHTML = optionsHTML;
};
