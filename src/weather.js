const apiKey = "defaa80eb6e43e947faa745459177730";
const openWeatherMapURL = "https://api.openweathermap.org/data/2.5/weather";
export default function getWeather() {
  fetch(`${openWeatherMapURL}?q=${cityName}&appid=${apiKey}`);
}
