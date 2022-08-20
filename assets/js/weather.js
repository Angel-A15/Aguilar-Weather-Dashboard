// var apiKey = 966a05338762aed9f430379fd9d68bf9;
var fetchBtn = document.querySelector('fetchBtn')
var statsContainer = document.getElementById('stats');


// //function for current searched city
// var crntCityWeather = function(){
//     //request the github api URL
//     var apiUrl = "https://api.openweathermap.org/data/3.0/" + "onecall?lat={lat}&lon={lon}&direction=desc&appid={apiKy}";

//     //make a get request to url
//     fetch(apiUrl).then(function(response){

//         if(response.ok) {

//             response.json().then(function(data){
//                 displayIssues(data);
//             })
//         }
//     })
// }

function getApi(){
    var requestUrl = "https://api.openweathermap.org/data/3.0/" + "onecall?lat={lat}&lon={lon}&direction=desc&appid={apiKy}";

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
