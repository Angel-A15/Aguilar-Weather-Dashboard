
var fetchBtn = document.querySelector("#fetchBtn");
var searchValue = document.querySelector("#search-bar");

//weather condition variables
// var cityNameVal = document.querySelector("#city-name");

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

  getFiveDayApi(cityVal);


}


//function for current forecast
function getWeatherApi(cityName) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=966a05338762aed9f430379fd9d68bf9"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //will display to check for response
    
      today.innerHTML = `
      <p id="city-name">City: ${data.name}</p>
      <p id="temperature">Temperature: ${data.main.temp} F</p>
      <p id="wind">Wind: ${data.wind.speed} MPH</p>
      <p id="humidity">Humdity: ${data.main.humidity} %</p>
      <p id="uv">UV Index: ${data.uvi}</p>`
    

    });
}

//function for 5-day forecast
function getFiveDayApi(cityName){
  fetch(
    'https://api.openweathermap.org/data/2.5/?=' +cityName +
    '&units=imperial&appid=966a05338762aed9f430379fd9d68bf9'
  )
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
    // today.innerHTML = `
    // <p id="city-name">City: ${data.name}</p>
    // <p id="temperature">Temperature: ${data.main.temp} F</p>
    // <p id="wind">Wind: ${data.wind.speed} MPH</p>
    // <p id="humidity">Humdity: ${data.main.humidity} %</p>
    // <p id="uv">UV Index: ${data.uvi}</p>`
  })
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


//5 day api
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

//fetch search city data
fetchBtn.addEventListener("click", searchBtn);

