function formatDate(timestamp){
let date = new Date(timestamp);
let hours = date.getHours();
if (hours > 12) {
    hours = (`${hours}` - 12)
}
let minutes = ("0" + date.getMinutes()).slice(-2);

let days = [
    "sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]; 
let day = days[date.getDay()];
let ampm = hours >= 12 ? `am` : `pm`;

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
    let dateElement = document.querySelector("#dateTime");
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);
    console.log(response.data);
    
}


let apiKey = "88724523008dc9e1be18f6eb6a959b67"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=sydney&appid=${apiKey}&units=imperial`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);