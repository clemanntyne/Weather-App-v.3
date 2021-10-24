



function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature")
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;
    let conditionElement = document.querySelector("#condition");
    conditionElement.innerHTML = response.data.weather[0].description;
    let cloudElement = document.querySelector("#clouds");
    cloudElement.innerHTML = response.data.clouds.all;
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = response.data.wind.speed;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = response.data.main.humidity;
    console.log(response.data);
    
}


let apiKey = "88724523008dc9e1be18f6eb6a959b67"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=imperial`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);