var apiKey = "966a05338762aed9f430379fd9d68bf9";
var statsContainer = document.getElementById('stats');
var searchValue = document.querySelector("#fetchBtn")


function searchBtn(event){
  event.preventDefault();

    //will fetch the information the user is looking for
    var cityVal = searchValue.value;

    //calling weather api and passing the city name for the api call
    getWeatherApi(cityVal);

    //will call local storage function inside later after creation
    weatherStorage(cityVal);

}

function weatherStorage(city){

    var storage = JSON.parse(localStorage.getItem("weatherHistory"));
        if(storage===null){
            storage = [] 
        }
        storage.push(city)
        localStorage.setItem("weatherHistory", JSON.stringify(storage));
        
        //calling fucntion after to fetch data after storing value into LS
        getWeatherApi();
}

function getWeatherApi(cityName){

    fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={apiKey}");

    fetch(requestUrl)
        .then(function(response){
            return response.json();
        })

    .then(function(data){
        //will display to check for response
        console.log(data);

    });

}


//fetch search city data/havent made getApi function
fetchBtn.addEventListener('click', getApi); 
