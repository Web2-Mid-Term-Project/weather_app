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

function onPlaceChanged() {
  const place = autocomplete.getPlace();

  if (!place.geometry) {
    document.getElementById("search-input").placeholder = "Enter a city";
  } else {
    displayAllWeatherInfo(place.name);
  }
}