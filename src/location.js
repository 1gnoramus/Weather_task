export class Location {
  constructor() {
    this.latitude = null;
    this.longitude = null;
  }
  getGeolocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          resolve(position.coords);
        },
        (error) => reject(error)
      );
    });
  }
}
