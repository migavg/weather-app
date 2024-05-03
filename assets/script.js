const searchBTN = document.getElementById("searchButton");
const weatherInfo = document.getElementById("weatherInfo")



function pullWeather()  {
const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=Phoenix&appid=1585e0bbf2dbcb702a5708a67bf3b74d&units=imperial";

    fetch(weatherAPI)
    .then(function(response){
        return response.json();
    })

    .then(function (data)
    {
    console.log("test")
    console.log(data)

    showWeather(data);
}
)



};


function showWeather(data) {

    let currentTemp = document.createElement('p');

    currentTemp.textContent = `Current Temperature ${data.main.temp}` ;

    weatherInfo.append(currentTemp);


    console.log(data.main.temp)
}


searchBTN.addEventListener("click", pullWeather);