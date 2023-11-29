// import "./styles.scss";
// import image1 from "./images/city_icon1.png";
// import image2 from "./images/city_icon2.png";
// import image3 from "./images/city_icon3.png";
// import image4 from "./images/city_icon4.png";
// import image5 from "./images/your_city_bg.png";
// import image6 from "./images/snow.png";
// import image7 from "./images/sunny.png";
const API_KEY = "defaa80eb6e43e947faa745459177730";
const popCities = document.getElementById("cities_weather");
const URL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${API_KEY}`;

// Этап 2: Получение геолокации пользователя
function getGeolocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position.coords),
      (error) => reject(error)
    );
  });
}
getGeolocation();
// Этап 3: Вывод информации о текущей погоде
// function showWeather(weatherData) {
//   console.log(weatherData);
//   // Отобразите информацию о погоде на странице
//   weatherInfoElement.innerHTML = `<p>Текущая температура: ${weatherData.main.temp}°C</p>`;
// }

// Этап 4: Возможность ввода города в поисковую строку
// document.getElementById("search-button").addEventListener("click", () => {
//   const cityInput = document.getElementById("city-input").value;
//   getWeatherByCity(cityInput);
// });

// Этап 5: Обработка ошибок и асинхронность
function handleErrors(response) {
  if (!response.ok) {
    throw new Error(`Ошибка HTTP: ${response.status}`);
  }
  return response.json();
}

function getWeatherByCoords(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
    });
}

// Этап 8: Добавление асинхронности и Event Loop
function getWeatherByCity(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  )
    .then(handleErrors)
    .then((resp) => {
      popCities.innerHTML += `<div class="popular_city"> <div class="circle"> <img src="images/city_icon1.png" alt="" /> </div> <div class="popular_city_weather_info"> <h2>${
        resp.name
      }</h2> <p>${resp.weather[0].main}</p> <h1> ${Math.floor(
        resp.main.temp
      )}<span>°C</span></h1> </div> </div>`;
      console.log(resp);
    })
    // .then(showWeather)
    .catch((error) => console.error(error.message));
}

// // Запускаем приложение, получая геолокацию при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  getGeolocation()
    .then((coords) => getWeatherByCoords(coords.latitude, coords.longitude))
    .catch((error) => console.error(error.message));
});
getWeatherByCity("Madrid");
getWeatherByCity("Paris");
getWeatherByCity("London");
getWeatherByCity("Moscow");
getWeatherByCity("New York");
// const apiKey = "defaa80eb6e43e947faa745459177730";
// const openWeatherMapURL = "https://api.openweathermap.org/data/2.5/weather";
// let cityName = "London";
// function getWeather() {
//   fetch(`${openWeatherMapURL}?q=${cityName}&appid=${apiKey}`)
//     .then((resp) => {
//       return resp.json;
//     })
//     .then((resp) => {
//       console.log(resp);
//     });
// }
