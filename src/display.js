export function showWeatherOfPopulatCities(weatherData, element) {
  element.innerHTML += `<div class="popular_city"> <div class="circle"> <img src="images/city_icon1.png" alt="" /> </div> <div class="popular_city_weather_info"> <h2>${
    weatherData.name
  }</h2> <p>${weatherData.weather[0].main}</p> <h1> ${Math.floor(
    weatherData.main.temp
  )}<span>°C</span></h1> </div> </div>`;
}

function getWeatherPicture(temp) {
  if (temp > 15) {
    return "images/sunny.png";
  } else {
    return "images/snow.png";
  }
}
export function showWeatherOfCity(weatherData, element) {
  element.innerHTML = `<div class="city_info"> <h1>${weatherData.name}, ${
    weatherData.sys.country
  }</h1> <h2>09:30 <span>am</span></h2> <h3>26 March</h3> <p>Tuesday</p> </div> <div class="weather_info"> <img src="${getWeatherPicture(
    weatherData.main.temp - 273,
    15
  )}" alt="" /> <h2>${
    (weatherData.main.temp - 273, 15)
  } <span>°C</span></h2> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, iste. </p> </div>`;
  console.log(weatherData);
}
