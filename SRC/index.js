function formatDate(timestamp){
let date = new Date(timestamp);
let hours = date.getHours();
let ampm = hours >= 12 ? `pm` : `am`;
if (hours > 12) {
    hours = (`${hours}` - 12)
}
let minutes = ("0" + date.getMinutes()).slice(-2);

let days = [
    "sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]; 
let day = days[date.getDay()];


return `${day} ${hours}:${minutes} ${ampm}`;
}



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
    windElement.innerHTML = Math.round(response.data.wind.speed);
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = Math.round(response.data.main.humidity);
    let dateElement = document.querySelector("#date-time");
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description); 

    fahrenheitTemperature = response.data.main.temp;
}

function search (city) {
let apiKey = "88724523008dc9e1be18f6eb6a959b67"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
event.preventDefault();
let cityInputElement = document.querySelector("#city-input");
search(cityInputElement.value)
}

function convertToMetric (event) {
    event.preventDefault();
    let celsius = Math.round((fahrenheitTemperature - 32) * 5 / 9);;
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = celsius;
    fahrenheitLink.classList.remove("active");
    celsiusLink.classList.add("active");

}

function convertToImperial (event){
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

let fahrenheitTemperature = null;


let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);


let celsiusLink = document.querySelector ("#celsius-link");
celsiusLink.addEventListener("click", convertToMetric);

let fahrenheitLink = document.querySelector ("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToImperial);

