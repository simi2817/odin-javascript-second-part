import getWeatherData from "./weather/fetch/getWeatherData.js";
import clearScreen from "./clearScreen.js";

const search = document.getElementById('searchForm');

search.addEventListener('submit', (e) => {
    e.preventDefault();
    const region = document.getElementById('location').value.toLowerCase();
    getWeatherData(region);
    clearScreen();
});