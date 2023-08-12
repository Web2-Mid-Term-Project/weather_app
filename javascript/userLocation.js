const DEFAULT_CITY = {
  lat: 49.28,
  lng: -123.12,
};

export async function getUserLocation() {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          resolve(location);
        },
        (error) => {
          console.error('error!', error);
          resolve(DEFAULT_CITY);
        }
      );
    } else {
      return DEFAULT_CITY;
    }
  });
}
