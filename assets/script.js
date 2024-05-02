const searchBTN = document.getElementById("searchButton");
const weatherBLOCK = document.getElementById("weatherBlock")



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
}
)
};



searchBTN.addEventListener("click", pullWeather);