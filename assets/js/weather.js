
var fetchBtn = document.querySelector("#fetchBtn");
var searchValue = document.querySelector("#search-bar");

//weather condition variables
// var cityNameVal = document.querySelector("#city-name");
var fiveDays = document.querySelector("#future")
var today = document.querySelector("#todaysWeather")
var listedCities = document.querySelector("#searched-cities")

//city search function
function searchBtn(event) {
  //will stop the browser from loading into a diff screen
  event.preventDefault();

  //will fetch the information the user is looking for
  var cityVal = searchValue.value;

  //this was replaced
  // getFiveDayApi(cityVal);

  getLocationApi(cityVal);


}

//function for current forecast
function getLocationApi(cityName) {

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
      console.log(data);
      //displays recieved data
      today.innerHTML = `
      <p id="city-name">City: ${data.name}</p>
      <p id="temperature">Temperature: ${data.main.temp} K</p>
      <p id="wind">Wind: ${data.wind.speed} MPH</p>
      <p id="humidity">Humdity: ${data.main.humidity} %</p>
      <p id="uv">UV Index: ${data.uvi}</p>`
    
      getWeatherApi(data)
      

    });
}


// //function for current forecast
function getWeatherApi(location) {
  //function getWeatherApi(cityName) {

  //this was added 
  var lat = location.coord.lat;
  var lon = location.coord.lon;
  console.log(lat, lon);
  fetch(
    'https://api.openweathermap.org/data/2.5/forecast?lat=' +lat+ '&lon=' +lon+ '&exclude=hourly,daily&appid=966a05338762aed9f430379fd9d68bf9'
  )   

    .then(function (response) {
 
      return response.json();
    })
    .then(function (data) {
      //will display to check for response
      console.log(data);
      fiveDays.inner=`
      <p id="day-1">Day 1: ${data.name}</p>`

      console.log(new Date(data.list[0].dt*1000))
      console.log(new Date(data.list[8].dt*1000))
      console.log(new Date(data.list[16].dt*1000))
      console.log(new Date(data.list[24].dt*1000))
      console.log(new Date(data.list[32].dt*1000))

      }

    )
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


//fetch search city data
fetchBtn.addEventListener("click", searchBtn);

