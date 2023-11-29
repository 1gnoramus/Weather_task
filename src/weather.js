const apiKey = "defaa80eb6e43e947faa745459177730";
const openWeatherMapURL = "https://api.openweathermap.org/data/2.5/weather";

export class WeatherModel {
  constructor() {}

  getWeatherByCity(city) {
    return (
      fetch(`${openWeatherMapURL}?q=${city}&appid=${apiKey}&units=metric`)
        .then((resp) => {
          return resp.json();
        })
        .then((resp) => {
          return resp;
        })
        // .then(showWeather)
        .catch((error) => console.error(error.message))
    );
  }

  getWeatherByCoords(lat, lon) {
    const url = `${openWeatherMapURL}?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    return fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((error) => console.error(error.message));
  }
}
