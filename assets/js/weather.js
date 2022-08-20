var weatherAPI =function(){
    var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={966a05338762aed9f430379fd9d68bf9}";

    fetch(requestUrl)
        .then(function(response){
            return response.json();
        })

}