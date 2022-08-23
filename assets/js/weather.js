//api set up variables
var apiKey = "966a05338762aed9f430379fd9d68bf9";

var fetchBtn = document.querySelector("#fetchBtn");
var searchValue = document.querySelector("#search-bar");

//weather condition variables
// var cityNameVal = document.querySelector("#city-name");
var tempVal = document.querySelector("#temperature");
var windVal = document.querySelector("#wind");
var humidVal = document.querySelector("#humidity");
var uvVal = document.querySelector("#uv");
var today = document.querySelector("#todaysWeather")
var listedCities = document.querySelector("#searched-cities")

//city search function
function searchBtn(event) {
  //will stop the browser from loading into a diff screen
  event.preventDefault();

  //will fetch the information the user is looking for
  var cityVal = searchValue.value;

  //calling weather api and passing the city name for the api call
  getWeatherApi(cityVal);


}

//function to fetch weather data from url
function getWeatherApi(cityName) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&units=imperial&appid=966a05338762aed9f430379fd9d68bf9"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //will display to check for response
      console.log(data);
      today.innerHTML = ''
      today.append(data.name)
      today.append(data.main.temp)
      today.append(data.main.humidity)
      today.append(data.wind.speed)
      tempVal.textContent =(data.main.temp);


    });
}



//local storage function
function weatherStorage(city) {
  //created a variable that converts the item weatherHistory in the localstorage in to a JSON parse element
  var storage = JSON.parse(localStorage.getItem("weatherHistory"));
  //since null is already in set
  if (storage === null) {
    //this will store whatever
    storage = [];
  }
  //will store city searched
  storage.push(city);

  //will take whatever city value searched and convert it into a JSON stringify object
  localStorage.setItem("weatherHistory", JSON.stringify(storage));


}

// //fucntion that revieves/updates data:currently working on
// function weatherData(data) {
//   var { cityName, teperature, wind, humidity, uv } = data.current;
// }

//fetch search city data
fetchBtn.addEventListener("click", searchBtn);

// 'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}'

// 'https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}=${part}&appid={apiKey}'
// console.log(`https://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&appid=5d525352fa588eed3d6d28ab5746dc12`)
