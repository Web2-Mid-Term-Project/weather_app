const DEFAULT_CITY = {
  lat: 49.28,
  lng: -123.12,
};

export async function getUserLocation() {
  if ("geolocation" in navigator) {
    return navigator.geolocation.getCurrentPosition(success, error);
  } else {
    return DEFAULT_CITY;
  }
}

function success(position) {
  return {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
}

function error() {
  return DEFAULT_CITY;
}
