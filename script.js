
const apiKey = "5913aebee53fce26321945ad135fd55e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric7q=bangalore";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    checkWeather();
}