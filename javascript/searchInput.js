import { displayAllWeatherInfo } from "./displayAllWeatherInfo";

let autocomplete;

export function searchCityName() {
  let script = document.createElement("script");
  script.src =
    "https://maps.googleapis.com/maps/api/js?key=GOOGLE_PLACES_API_KEY&libraries=places&callback=initAutocomplete";
  script.async = true;

  window.initAutocomplete = function () {
    autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("search-input"),
      {
        types: ["(cities)"],
      }
    );
    autocomplete.addListener("place_changed", onPlaceChanged);
  };
  document.head.appendChild(script);
}

export function onPlaceChanged() {
  const place = autocomplete.getPlace();

  if (!place.geometry) {
    document.getElementById("search-input").placeholder = "Search Cities";
  } else {
    displayAllWeatherInfo(
      place.geometry.location.lat(),
      place.geometry.location.lng()
    );
  }

  return place;
}
