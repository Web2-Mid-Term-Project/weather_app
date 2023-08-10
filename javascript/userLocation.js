import { displayAllWeatherInfo, CITY_NAME } from "./displayAllWeatherInfo";

export async function getUserLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    displayAllWeatherInfo();
  }
}

function success(position) {
  const userLocation = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
  const geocoder = new google.maps.Geocoder();
  let defaultCity;

  geocoder
    .geocode({ location: userLocation })
    .then((res) => {
      if (res.results[0]) {
        const addressComponents = res.results[0].address_components;
        const cityComponent = addressComponents.find((component) =>
          component.types.includes("locality")
        );
        defaultCity = cityComponent ? cityComponent.long_name : CITY_NAME;
      } else {
        defaultCity = CITY_NAME;
      }
    })
    .catch((e) => {
      defaultCity = CITY_NAME;
    });
  displayAllWeatherInfo(defaultCity);
}

function error() {
  displayAllWeatherInfo();
}
