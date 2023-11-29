import "./styles.scss";
import image1 from "./images/city_icon1.png";
import image2 from "./images/city_icon2.png";
import image3 from "./images/city_icon3.png";
import image4 from "./images/city_icon4.png";
import image5 from "./images/your_city_bg.png";
import image6 from "./images/snow.png";
import image7 from "./images/sunny.png";
import { WeatherModel } from "./weather";
import { showWeatherOfPopulatCities } from "./display";
import { showWeatherOfCity } from "./display";
import { Location } from "./location";

const weather = new WeatherModel();
const location = new Location();

const popCities = document.getElementById("cities_weather");
const your_city = document.getElementById("your_city_block");
const find_city = document.getElementById("find_city_block");
const city_input = document.getElementById("city_input");
const search_button = document.getElementById("search_button");

document.addEventListener("DOMContentLoaded", () => {
  location.getGeolocation().then(() => {
    weather
      .getWeatherByCoords(location.latitude, location.longitude)
      .then((cityObject) => {
        showWeatherOfCity(cityObject, your_city);
      });
  });
});

search_button.addEventListener("click", () => {
  weather.getWeatherByCity(city_input.value).then((weatherData) => {
    showWeatherOfCity(weatherData, find_city);
  });
});

weather.getWeatherByCity("Madrid").then((weatherData) => {
  showWeatherOfPopulatCities(weatherData, popCities);
});
weather.getWeatherByCity("Paris").then((weatherData) => {
  showWeatherOfPopulatCities(weatherData, popCities);
});
weather.getWeatherByCity("London").then((weatherData) => {
  showWeatherOfPopulatCities(weatherData, popCities);
});
weather.getWeatherByCity("Moscow").then((weatherData) => {
  showWeatherOfPopulatCities(weatherData, popCities);
});
weather.getWeatherByCity("New York").then((weatherData) => {
  showWeatherOfPopulatCities(weatherData, popCities);
});
