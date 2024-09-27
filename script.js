const API_Key = "104ed6846fcfaeb8edf121bcf6bb463e";
const API_url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");

async function check_weather(city) {
    const response = await fetch(API_url + city + `&appid=${API_Key}`);
    const data = await response.json();
    console.log(data);

    document.querySelector("#cityName").innerHTML = data.name;
    document.querySelector("#temperature").innerHTML = `Temperature: ${data.main.temp}°C`;
    document.querySelector("#description").innerHTML = `Weather: ${data.weather[0].description}`;
    document.querySelector("#humidity").innerHTML = `Humidity: ${data.main.humidity}%`;
    document.querySelector("#windSpeed").innerHTML = `Wind Speed: ${data.wind.speed} km/h`;

    console.log(data.weather[0].description);
}

searchBtn.addEventListener("click", () => {
    check_weather(searchBox.value);
});
